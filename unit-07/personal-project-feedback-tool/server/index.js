require('dotenv').config()
const express = require('express')
    authCtrl = require('./controllers/authController'),
    fbCtrl = require('./controllers/fbController')
    adminCtrl = require('./controllers/adminController')
const massive = require('massive')
const session = require('express-session')
const app = express();
// const bcrypt= require('bcryptjs');
const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    // host: 'smtp.mail.yahoo.com',
    // port: 465,
    // secure: false,
    // debug: false,
    // logger: true
})




const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000}
    // cookie: {maxAge: 1000 * 60 * 60 * 24}
   
   }))
   
   
   massive({
       connectionString: CONNECTION_STRING,
       ssl:{rejectUnauthorized: false},
    //    transporter: transporter
    
    
    
    })
       .then((db, transporter)  => {
           app.set('db', db)
           app.set('transporter', transporter)
           console.log('db and transporter connected')
           app.listen(SERVER_PORT, ()=> console.log(`running on ${SERVER_PORT}`));
       })
   

//User Auth endpoints

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/me', authCtrl.getUser)
app.post('/logout', authCtrl.logout)


//User endpoints

// app.get('https://dummyapi.io/data/api/', userCtrl.getFB)


//Feedback endpoints

app.get('/myfeedback/:user_id', fbCtrl.readFB)
app.post('/myfeedback/submit', fbCtrl.createFB)
app.post('/myfeedback/anonymous', fbCtrl.createAnonymous)
app.put(`/myfeedback/:id`, fbCtrl.updateFB)
app.delete(`/myfeedback/:id`, fbCtrl.deleteFB)
app.post(`/confirmationemail/`, fbCtrl.confirmationEmail)

//Admin team endpoints

app.get(`/managerview/myteam`, adminCtrl.retrieveTeam)
app.get(`/myteamfeedback/:id`, fbCtrl.readFB)



//Nodemailer -------------------------------------------------------

//Step 1
// let transporter = nodemailer.createTransport({

//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     },
//     // host: 'smtp.mail.yahoo.com',
//     // port: 465,
//     // secure: false,
//     // debug: false,
//     // logger: true
// })


//Step 2
// let mailOptions = {

//     from: 'testnodemailerprojects@gmail.com',
//     to: 'testnodemailerprojects@gmail.com',
//     subject: '__ on your team submitted new feedback',
//     text: 'IT WORKS'
// }

//Step 3


// transporter.sendMail(mailOptions, function (err, data){
//     if(err){
//         console.log('Nodemailer error', err)
//     }else {
//         console.log('Email Sent!')
//     }
// } )


//Step 4

//disable gmail feature