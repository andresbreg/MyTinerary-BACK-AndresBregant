const {connect} = require('mongoose')
require('dotenv').config({path:'./.env'})

const URI = process.env.MONGO_DB

connect(URI)
  .then(()=>{
    console.log('Successful connection to the database')
  })    
  .catch(()=>{
    console.log('Error connecting to the database')
  })