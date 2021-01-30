const express = require('express')
const app = express()
const ctrl = require('./controller')
app.use(express.json())


//End points

app.get('/api/careerSkills', ctrl.getSkills) //test in postman was successful!!
app.post('/api/careerSkills', ctrl.addSkills) //test in postman unsuccessful
app.put('/api/careerSkills', ctrl.editSkills)
app.delete('/api/careerSkills', ctrl.deleteSkills)


const port = 3333
app.listen(port, ()=> console.log(`Port listening on ${port}`))