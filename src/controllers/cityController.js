const City = require('../models/City')

const getCities = async (req,res) => {
  try {
    let cities = await City.find().populate('_itineraries')
    res.status(200).json(cities)
  }
  catch (error){
    res.status(500).json({message: error.message})
  }
}

const getCity = async (req,res) => {
  try {
    let {id} = req.params
    let city = await City.findOne({_id: id}).populate('_itineraries')
    res.status(200).json(city)
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

const getCityItineraries = async (req,res) => {
  try {
    let {id} = req.params
    let city = await City.findOne({_id: id}).populate('_itineraries')
    let itineraries = city._itineraries
    res.status(200).json(itineraries)
  }
  catch (error) {
    res.status(500).json({message: error.message})
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
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

const editCity = async (req,res) => {
  try {
    let {id} = req.params
    let payload = req.body
    let cityUpdate = await City.findOneAndUpdate({_id: id}, payload, {new:true})    
    res.status(200).json(
      {
        "Message": "City updated", 
        "City": cityUpdate
      }
    )
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

const deleteCity = async (req,res) => {
  try {
    let {id} = req.query
    let selectedCity = await City.findOneAndDelete({_id: id})    
    res.status(201).json(
      {
        "Message": "The following city has been deleted from the database",
        "City": selectedCity
      }
    )
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }  
}

module.exports = {getCities, getCity, getCityItineraries, addCity, editCity, deleteCity}