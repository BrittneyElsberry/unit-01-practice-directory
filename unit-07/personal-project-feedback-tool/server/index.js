require('dotenv').config()
const express = require('express')
    authCtrl = require('./controllers/authController'),
    fbCtrl = require('./controllers/fbController')
const massive = require('massive')
const session = require('express-session')
const app = express();
// const bcrypt= require('bcryptjs');


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
       ssl:{rejectUnauthorized: false}})
       .then(db => {
           app.set('db', db)
           console.log('db connected')
           app.listen(SERVER_PORT, ()=> console.log(`running on ${SERVER_PORT}`));
       })
   

//Auth endpoints

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/me', authCtrl.getUser)
app.post('/logout', authCtrl.logout)


//User endpoints

// app.get('https://dummyapi.io/data/api/', userCtrl.getFB)


//Feedback endpoints

app.get('/myfeedback/home', fbCtrl.readFB)
app.post('/myfeedback/submit', fbCtrl.createFB)
app.post('/myfeedback/anonymous', fbCtrl.createAnonymous)
app.put(`/myfeedback/:id`, fbCtrl.updateFB)
app.delete(`/myfeedback/:id`, fbCtrl.deleteFB)