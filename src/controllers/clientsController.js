const Client = require('../models/Client')

const addClient = async (req,res) => {
  
  try {
    let payload = req.body
    // let querys = req.query
    
    console.log(payload)
    // console.log(querys)
    
    let newClient = await Client.create(payload)
    
    res.status(201).json(
      {
        "Message": "New client added to the database",
        "Client": newClient
      }
      )
  }
  catch(err){
    res.status(500).json({message: err})
  }
}

const getClient = (req,res) => {

  const {id} = req.params
  const {data} = req.query

  if(data) {
    res.json(
      {
      name: 'John',
      lastName: 'Johnson',
      age: '16',
      paramId: id,
      queryData: data
      }
    )
  } else {
    res.json(
      {
      name: 'John',
      lastName: 'Johnson',
      age: '16',
      paramId: id
      }
    )
  }
}

const getClients = async (req,res) => {
  try {
    let clients = await Client.find()
    res.status(200).json(clients)
  }
  catch(err){
    res.status(500).json({message: err})
  }
}

module.exports = { addClient, getClient, getClients }