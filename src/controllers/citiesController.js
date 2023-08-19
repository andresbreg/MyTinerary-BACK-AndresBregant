const City = require('../models/City')

const getCities = async (req,res) => {
  try {
    let cities = await City.find()
    res.status(200).json(cities)
  }
  catch(error){
    res.status(500).json({message: error})
  }
}

const getCity = async (req,res) => {
  try {
    let {id} = req.params
    let city = await City.findOne({_id: id})
    res.status(200).json(city)  
  }
  catch(error) {
    res.status(500).json({message: error})
  }
}

const addCity = async (req,res) => {  
  try {
    let payload = req.body
    let newCity = await City.create(payload)    
    res.status(201).json(
      {
        "Message": "New city added to the database",
        "City": newCity
      }
    )
  }
  catch(error) {
    res.status(500).json({message: error})
  }
}

const editCity = async (req,res) => {
  try {
    let {id} = req.params
    let payload = req.body
    let cityUpdate = await City.findOneAndUpdate({_id: id}, payload)    
    res.status(200).json(
      {
        "Message": "City updated", 
        "City": req.body
      }
    )
  }
  catch(error) {
    res.status(500).json({message: error})
  }
}

const deleteCity = async (req,res) => {
  try {
    let {id} = req.query
    let selectedCity = await City.findOne({_id: id})
    let deletedCity = await City.deleteOne({_id: id})    
    res.status(201).json(
      {
        "Message": "The following city has been deleted from the database",
        "City": selectedCity
      }
    )
  }
  catch(error) {
    res.status(500).json({message: error})
  }  
}

module.exports = {getCities, getCity, addCity, editCity, deleteCity }