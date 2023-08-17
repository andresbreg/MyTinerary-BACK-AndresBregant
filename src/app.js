const express = require('express')
const router = require('./router/router')
require('./config/db')
require('dotenv').config({path:'./.env'})

const app = express()
const port = process.env.PORT 
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})