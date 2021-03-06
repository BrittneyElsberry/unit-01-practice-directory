require('dotenv').config()
const express = require('express')
    authCtrl = require('./controllers/authController'),
    fbCtrl = require('./controllers/fbController')
    adminCtrl = require('./controllers/adminController')
    chartCtrl = require('./controllers/chartController')
const massive = require('massive')
const session = require('express-session')
const app = express();
// const bcrypt= require('bcryptjs');
const nodemailer = require('nodemailer')






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
       .then((db)  => {
           app.set('db', db)
        //    app.set('transporter', transporter)
           console.log('db connected')
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
app.get('/mycomments/:feedback_id', fbCtrl.readComments)
app.post('/myfeedback/submit', fbCtrl.createFB)
app.post('/myfeedback/anonymous', fbCtrl.createAnonymous)
app.put(`/myfeedback/:id`, fbCtrl.updateFB)
app.delete(`/myfeedback/:id`, fbCtrl.deleteFB)
app.post(`/confirmationemail/`, fbCtrl.confirmationEmail)

//Admin team endpoints

app.get(`/managerview/myteam`, adminCtrl.retrieveTeam)
app.get(`/myteamfeedback/:user_id`, adminCtrl.retrieveIndividualFB) //change this to user_id
// app.get(`/managercommentlist/:feedback_id`, adminCtrl.retrieveComments)
app.post(`/managercomment/`, adminCtrl.addComment)


// Chart endpoint

//category 

app.get(`/chart1`, chartCtrl.chartData1)
app.get(`/chart2`, chartCtrl.chartData2)
app.get(`/chart3`, chartCtrl.chartData3)
app.get(`/chart4`, chartCtrl.chartData4)


//comments 
app.get(`/comment1`, chartCtrl.commentData1)
app.get(`/comment2`, chartCtrl.commentData2)
app.get(`/comment3`, chartCtrl.commentData3)
app.get(`/comment4`, chartCtrl.commentData4)


//Nodemailer -------------------------------------------------------


// let transporter = nodemailer.createTransport({

//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     },
//     sendmail: true



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



 // const transporter = req.app.get('transporter')

    // let mailOptions = {

    //     from: 'testnodemailerprojects@gmail.com',
    //     to: 'testnodemailerprojects@gmail.com',
    //     subject: ` ${username} on your team submitted new feedback!`,

    //     html: `

    //     <h2>Testing this out</h2>
    //     <p>${feedback}</p>
    //     `
    // }
    
//   let sending =  await transporter.sendMail(mailOptions, function (err, res){
//     if(err){
//         console.log('Nodemailer error', err)
//     }else {
//         res.status(200).send(console.log('Email Sent!', sending))
//     }
// } )