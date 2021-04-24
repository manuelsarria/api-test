"use strict";
const {Router} = require('express')
const router = Router()
const fetch = require('node-fetch')
const templateMail = require('./templateMail');
const date = new Date()
const nodemailer = require("nodemailer");
//const request = require('request');



router.post('/',(req,res) => {

    const {name,nameQuotation,email,phone,numInterpreters,timeInterpreters,modality,thematic, dateEvent,timeStart, timeStop, apiKey}= req.body
    if (apiKey != process.env.API_KEY){
        res.status(401).send()
        return
    }
    var messageWelcome
    var gender = null

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async function sendMail(name,nameQuotation,email,phone,numInterpreters,timeInterpreters,modality,thematic, dateEvent,timeStart, timeStop){
        try{

            var nameAux = name.split(" ")[0]
            var gender = ""

            let nameUp = ""
            name.split(" ").forEach(nameAuxx => {
                nameUp = nameUp +" "+capitalizeFirstLetter(nameAuxx)
            });

            let contentHTMLBusiness = templateMail.templateBusiness(name,nameQuotation,email,phone,numInterpreters,timeInterpreters,modality,thematic, dateEvent,timeStart, timeStop)
            messageWelcome = templateMail.getMessageWelcome(nameUp,gender)
            let monthYear = date.getDay() + "-"+date.getMonth()+"-"+date.getFullYear()
            let contentHTMLClient = templateMail.templateClient(messageWelcome,monthYear)
            
            let transporter = nodemailer.createTransport({
                host: process.env.SERVER_MAIL,
                port: process.env.SERVER_MAIL_PORT,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: process.env.SERVER_MAIL_AUTH_USER,
                  pass: process.env.SERVER_MAIL_AUTH_PWD
                },
                tls: {rejectUnauthorized: false}
              });
            
        // Specify the fields in the email.
        let mailClient = {
            from: process.env.MAIL_FROM,
            to: email,
            subject: `${process.env.CUSTOMER_NAME} - Confirmación de Solicitud`,
           // text: "HOLA =)"//,
            html: contentHTMLClient,
        };
        // console.log(contentHTMLClient)
         await transporter.sendMail(mailClient)

        let mailBusiness = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO_ADMIN,
            subject: `${process.env.CUSTOMER_NAME} - Nueva  Solicitud`,
           // text: "HOLA =)"//,
            html: contentHTMLBusiness,
        };

        await transporter.sendMail(mailBusiness)
        await res.status(200).send();
        }catch(e)
        {
            console.log(`Error: ${e}`)
            await res.status(500).send();
        }
    }

    sendMail(name,nameQuotation,email,phone,numInterpreters,timeInterpreters,modality,thematic, dateEvent,timeStart, timeStop)
    


})

module.exports = router