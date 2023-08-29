const Itinerary = require('../models/Itinerary')
const City = require('../models/City')

const getItineraries = async (req,res) => {
  try {
    let itineraries = await Itinerary.find().populate('_city')
    res.status(200).json(itineraries)
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const getItinerary = async (req,res) => {
  try {
    let {id} = req.params
    let itinerary = await Itinerary.findOne({_id: id}).populate('_city')
    res.status(200).json(itinerary)  
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const addItinerary = async (req,res) => {  
  try {
    let payload = req.body
    let {id} = req.query
    let city = await City.findById(id)
    let newItinerary = await Itinerary.create(payload)
    newItinerary = await newItinerary.populate('_city')
    await city.updateOne({_itineraries: [...city._itineraries, newItinerary]})
    // let updatedCity = await City.findById(id).populate('_itineraries')
    res.status(200).json(
      {
        "Message": "New itinerary added to the database",
        "Itinerary": newItinerary,
        // "City": updatedCity
      }
    )
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const editItinerary = async (req,res) => {
  try {
    let {id} = req.params
    let itinerary = await Itinerary.findById(id)
    let payload = req.body
    if (payload._city == itinerary._city) {
      let updatedItinerary = await Itinerary.findOneAndUpdate({_id: id}, payload, {new:true})
      updatedItinerary = await updatedItinerary.populate('_city')
      res.status(200).json(
        {
          "Message": "Itinerary updated", 
          "Itinerary": updatedItinerary
        }
      )
    } 
    else {
      let updatedItinerary = await Itinerary.findOneAndUpdate({_id: id}, payload, {new:true})
      updatedItinerary = await updatedItinerary.populate('_city')
      await City.updateOne({_id: payload._city}, {$push: {_itineraries: itinerary._id}})
      // let updatedNewCity = await City.findById(payload._city).populate('_itineraries')
      await City.updateOne({_id: itinerary._city}, {$pull: {_itineraries: itinerary._id}})
      // let updatedOldCity = await City.findById(itinerary._city).populate('_itineraries')      
      res.status(200).json(
        {
          "Message": "Itinerary updated",
          "Itinerary": updatedItinerary,
          // "New City": updatedNewCity,
          // "Old City": updatedOldCity
        }
      )
    }    
  }
  catch (error) {
    res.status(500).json({message: error})
  }
}

const deleteItinerary = async (req,res) => {
  try {
    let {id} = req.query
    let selectedItinerary = await Itinerary.findOneAndDelete({_id: id}).populate('_city')
    let city = await City.findById(selectedItinerary._city)
    await City.updateOne({_id: city}, {$pull: {_itineraries: selectedItinerary._id}})
    // let updatedCity = await City.findById(city).populate('_itineraries')
    res.status(201).json(
      {
        "Message": "The following itinerary has been deleted from the database",
        "Itinerary": selectedItinerary,
        // "City": updatedCity
      }
    )
  }
  catch (error) {
    res.status(500).json({message: error})
  }  
}

module.exports = {getItineraries, getItinerary, addItinerary, editItinerary, deleteItinerary}