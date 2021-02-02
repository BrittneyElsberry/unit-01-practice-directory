const express = require('express')
const app = express()
const ctrl = require('./controller')

app.use(express.json())


//End points

app.get('/api/careerSkills', ctrl.getSkills) //test in postman was successful!!
app.post('/api/careerSkills', ctrl.addSkills) //test in postman successful
app.put('/api/careerSkills/:id', ctrl.editSkills)
app.delete('/api/careerSkills/:id', ctrl.deleteSkills)
app.get('/api/jobListing', ctrl.getJobListing)
app.get('/api/myRole', ctrl.getMyRole)


const port = 3333
app.listen(port, ()=> console.log(`Port listening on ${port}`))


