//version de mailjet
'use strict';
const { Router } = require('express');
const router = Router();
const templateMail = require('./templateMail');
const nodemailer = require('nodemailer');

require('dotenv').config({path:'../../.env'})
const mysql = require('mysql');
// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
console.log(process.env.DB_HOST, '<<<>>>>DB_HOST');
console.log(process.env.DB_USER, '<<<>>>>DB_USER');
console.log(process.env.DB_PASSWORD, '<<<>>>>DB_PASSWORD');
console.log(process.env.DB_DATABASE, '<<<>>>>DB_DATABASE');
const con = mysql.createConnection({
  host: toString(process.env.DB_HOST),
  user: toString(process.env.DB_USER),
  password: toString(process.env.DB_PASSWORD),
  database: toString(process.env.DB_DATABASE)
});

con.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
});

router.post('/', (req, res) => {

  console.log('>>>>>>>TESTTTTTTTTTT', process.env.SERVER_MAIL);
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

          //create transport with mailjet
          const transporter = nodemailer.createTransport({
            host: process.env.SERVER_MAIL,
            port: 465,
            secure: true,
            auth: {
              user: process.env.SERVER_MAIL_AUTH_USER,
              pass: process.env.SERVER_MAIL_AUTH_PWD,
            },
          });

          // Specify the fields in the email.
          let mailClient = {
            from: process.env.MAIL_FROM,
            to: email,
            subject: `${process.env.CUSTOMER_NAME} - Confirmación de Registro`,
            // text: "HOLA =)"//,
            html: contentHTMLClient,
          };

          
          try {
            await transporter.sendMail(mailClient);
          } catch (error) {
            console.log(error);
          }
          

          let mailBusiness = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO_ADMIN + ',' + emailsFromDataBase,
            subject: `${process.env.CUSTOMER_NAME} - Nuevo  Cliente Registrado`,
            // text: "HOLA =)"//,
            html: contentHTMLBusiness,
          };

          try {
            await transporter.sendMail(mailBusiness);
            await res.status(200).send();
          } catch (error) {
            console.log(error);
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
