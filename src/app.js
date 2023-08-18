const express = require('express')
const router = require('./router/router')
const cors = require('cors')
require('dotenv').config()
require('./config/db')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})