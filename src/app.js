const express = require('express')
const router = require('./router/router')
require('dotenv').config()
require('./config/db')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})