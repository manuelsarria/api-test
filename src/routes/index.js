// version google

'use strict';
const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const templateMail = require('./templateMail');
const date = new Date();
const nodemailer = require('nodemailer');
//const request = require('request');
require('dotenv').config({path:'../../.env'})
const mysql = require('mysql');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: '145.239.65.83',
  user: 'trackin3_trackingadmin',
  password: 'trackin3_trackingadmin',
  database: 'trackin3_trackingadmin',
});


const CLIENT_ID = process.env.CLIENT_ID;
const SECRET_ID = process.env.SECRET_ID;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.REDIRECT_URI;

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
});

router.post('/', (req, res) => {
  const { branch, name, lastName, email, phone, birthDay, address, howDidYouFind, referred } =
    req.body;
		

  
  con.query('SELECT * FROM casilleros WHERE id = ' + branch, (err, rows) => {
    if (err) throw err;

    var dataResponse = rows[0];
    var counter = dataResponse['counter'] + 1;
    var branchresponse = dataResponse['branch'];

    con.query(
      'UPDATE casilleros SET counter = ? Where id = ?',
      [counter, branch],
      (err, result) => {
        if (err) throw err;
      }
    );

    let locker = `${branchresponse}-${counter}`;

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async function sendMail(
      name,
      lastName,
      email,
      phone,
      birthDay,
      address,
      howDidYouFind,
      referred,
      locker
    ) {
      try {
        name = capitalizeFirstLetter(name);
        lastName = capitalizeFirstLetter(lastName);

        await con.query('SELECT * FROM emails WHERE id = ' + branch, async (err, rows) => {
          let emailsFromDataBase = [];
          for (let item of rows) {
            emailsFromDataBase.push(item['email']);
          }

          emailsFromDataBase = emailsFromDataBase.join(',');

          let contentHTMLBusiness = templateMail.templateBusiness(
            name,
            lastName,
            email,
            phone,
            birthDay,
            address,
            howDidYouFind,
            referred,
            locker
          );
          let nameFullLocker = `${name} ${lastName} ${locker}`;
          let contentHTMLClient = templateMail.templateClient(
            name,
            nameFullLocker,
            process.env.POBOX_ADDRESS,
            process.env.POBOX_COUNTRY,
            process.env.POBOX_STATE,
            process.env.POBOX_ZIPCODE,
            process.env.POBOX_PHONE
          );

          // let transporter = nodemailer.createTransport({
          //     host: process.env.SERVER_MAIL,
          //     port: process.env.SERVER_MAIL_PORT,
          //     secure: true, // true for 465, false for other ports
          //     auth: {
          //       user: process.env.SERVER_MAIL_AUTH_USER,
          //       pass: process.env.SERVER_MAIL_AUTH_PWD
          //     },
          //     tls: {rejectUnauthorized: false}
          // });

          // let transporter = nodemailer.createTransport({
          //     host: 'smtp.gmail.com',
          //     port: 465,
          //     secure: true, // true for 465, false for other ports
          //     auth: {
          //       user: "trackingpty@gmail.com",
          //       pass: "Tracking@50720-21@$"
          //     },
          //     tls: {rejectUnauthorized: false}
          // });
          
          const createTransporter = async () => {

            const oauth2Client = new OAuth2(
              CLIENT_ID,
              SECRET_ID,
              REDIRECT_URI
            );
          
            oauth2Client.setCredentials({
              refresh_token: REFRESH_TOKEN
            });
          
            const accessToken = await new Promise((resolve, reject) => {
              oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject(`Failed to create access token :(\n${err}`);
                }
                resolve(token);
              });
            }).catch((err) => console.log('Access Token Error: ', err));
          
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                type: "OAuth2",
                user: process.env.SERVER_MAIL_AUTH_USER,
                accessToken,
                clientId: CLIENT_ID,
                clientSecret: SECRET_ID,
                refreshToken: REFRESH_TOKEN,
                expires: 3600
              },
              tls: {
                rejectUnauthorized: false
              }
            });
          
            try {
              return transporter;
            } catch (error) {
              console.log('Create Transport Error: ', error);
            }
          };

          // Specify the fields in the email.
          let mailClient = {
            from: process.env.MAIL_FROM,
            to: email,
            subject: `${process.env.CUSTOMER_NAME} - Confirmación de Registro`,
            // text: "HOLA =)"//,
            html: contentHTMLClient,
          };

          // await transporter.sendMail(mailClient);

          let mailBusiness = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO_ADMIN + ',' + emailsFromDataBase,
            subject: `${process.env.CUSTOMER_NAME} - Nuevo  Cliente Registrado`,
            // text: "HOLA =)"//,
            html: contentHTMLBusiness,
          };

          // await transporter.sendMail(mailBusiness);
          // await res.status(200).send();

          const sendEmail = async (emailOptions) => {
            try {
              let emailTransporter = await createTransporter();
              const response = await emailTransporter
                .sendMail(emailOptions)
                .catch((err) => console.log('Email Transport Err: ', err));

              return response;
            } catch (error) {
              console.log('Email Transport Error: ', error);
            }
          };

          try {
            await sendEmail(mailClient)
              .then(() => res.status(200).json({ status: 200, msg: 'aqui ejecuti=to el send' }))
              .catch((err) => console.log('Send Email Err', err));
            await sendEmail(mailBusiness);
          } catch (error) {
            console.log('Send Email Error: ', error)
            return res.status(500).json({ error: error.message || error.toString() });
          }

        });
      } catch (e) {
        console.log(`Error: ${e}`);
        await res.status(500).send();
      }
    }

    sendMail(name, lastName, email, phone, birthDay, address, howDidYouFind, referred, locker);

    // con.end((err) => {
    //     // The connection is terminated gracefully
    //     // Ensures all remaining queries are executed
    //     // Then sends a quit packet to the MySQL server.
    //   });
  });
});

router.get('/', (req, res) => {
  const { branch, name, lastName, email, phone, birthDay, address, howDidYouFind, referred } =
    req.body;

  let contentHTMLBusiness = templateMail.templateClient(
    name,
    lastName,
    email,
    phone,
    birthDay,
    address,
    howDidYouFind,
    referred
  );
  // let contentHTMLBusiness = templateMail.templateBusiness("","","","","","","","","","","")
  res.send(contentHTMLBusiness);
});

module.exports = router;
