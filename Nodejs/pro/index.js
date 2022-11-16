

// var express = require("express");
// var http = require("http")
// var path = require("path")
// var nodemailer = require("nodemailer")

// var app = express();
// var server = http.Server(app)
// var port = 587

// app.set("port", port)
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname, "static")))

// //Routing
// app.get("/", function(req, response){
//     response.sendFile (path.join(__dirname, "static/index.html"))
// })

// app.post("/send_email", function(req, response){
//     var from = req.body.from
//     var to = req.body.to
//     var subject = req.body.subject
//     var message = req.body.message

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'Nodejspro123@gmail.com',
//             pass: 'vdrengeucrbgkiip'
//         }
//     })

//     var mailOptions = {
//         from: from,
//         to:to,
//         subject:subject,
//         text:message
//     }

//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error)
//         } else {
//             console.log("Email Sent: " + info.response)
//         }
//         response.redirect("/")
//     })
// });

// //Initialize Web Server
// server.listen(port, function(){
//     console.log("starting server on port " + port)
// })
// console.clear()



////-----------------------------------------------------------



// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'Nodejspro123@gmail.com',
//     pass: 'vdrengeucrbgkiip'
//   }
// });

// var mailOptions = {
//   from: 'Nodejspro123@gmail.com',
//   to: 'kathanesejal@gmail.com',
//   subject: 'HI',
//   text: `I am NOdejs how are you`
// };

// //function requires to send mail
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });





//add express module 
const express = require('express');
const { dirname } = require('path');
const nodemailer=require('nodemailer');

const crd=require('./credn')
const app=express();
const port=3001;

//axcess folder by express
// app.use(express.static('foldername'));


//routing through app object, get function


app.get('/',(req,res)=>{
    // res.send('server is happy..');
    //get out path and index.html join them
    res.sendFile(__dirname+'/index.html')
});



app.get('/send',(req,res)=>{
    // res.send('hello server');
    // res.send(req.query);

    // fetching data from form 

    let email1=req.query.email1;
    let email2=req.query.email2;
    let subject=req.query.subject;
    let message=req.query.message;

    
const mail=nodemailer.createTransport({
    host:'smtp.gmail.com' ,
    port:587,
    secure:false,
    auth:
    {
        user:crd.user,
        pass:crd.pass
    }
});
    mail.sendMail({
        from:'Nodejspro123@gmail.com',
        to:[email1,email2],
        subject:subject,
        html:message
    },(err)=>{
        if(err)
          throw err;
        res.send('Mail send')
    });

});









//call port server using nodejs
app.listen(port,(err)=>{
  if(err)
     throw err;

  console.log("Server is run ning at port %d ",port);



  
});