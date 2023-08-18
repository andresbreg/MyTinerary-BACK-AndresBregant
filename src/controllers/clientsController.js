const Client = require('../models/Client')

const getClients = async (req,res) => {
  try {
    let clients = await Client.find()
    res.status(200).json(clients)
  }
  catch(err){
    res.status(500).json({message: err})
  }
}

const getClient = async (req,res) => {
  try {
    let {id} = req.params
    let client = await Client.findOne({_id: id})
    res.status(200).json(client)  
  }
  catch(err) {
    res.status(500).json({message: err})
  }
}

const addClient = async (req,res) => {  
  try {
    let payload = req.body
    let newClient = await Client.create(payload)    
    res.status(201).json(
      {
        "Message": "New client added to the database",
        "Client": newClient
      }
    )
  }
  catch(err) {
    res.status(500).json({message: err})
  }
}

const editClient = async (req,res) => {
  try {
    let {id} = req.params
    let payload = req.body
    let clientUpdate = await Client.findOneAndUpdate({_id: id}, payload)    
    res.status(200).json(
      {
        "Message": "Client updated",
        "Client": req.body
      }
    )
  }
  catch(err) {
    res.status(500).json({message: err})
  }
}

const deleteClient = async (req,res) => {
  try {
    let {id} = req.query
    let selectedClient = await Client.findOne({_id: id})
    let deletedClient = await Client.deleteOne({_id: id})    
    res.status(201).json(
      {
        "Message": "The following client has been deleted from the database",
        "Client": selectedClient
      }
    )
  }
  catch(err) {
    res.status(500).json({message: err})
  }  
}

module.exports = {getClients, getClient, addClient, editClient, deleteClient }