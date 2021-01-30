const express = require('express')
const app = express()
app.use(express.json()) //Top level middleware

//Endpoints--------


const port = 4003
app.listen(port, ()=> console.log(`Listening on port ${port} yeeeeehawww`))