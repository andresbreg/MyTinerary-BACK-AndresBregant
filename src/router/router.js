const express = require('express')
const filterCities = require('../controllers/filterController')
const { getCities, getCity, getCityItineraries, addCity, editCity, deleteCity } = require('../controllers/cityController')
const {getItineraries, getItinerary, addItinerary, editItinerary, deleteItinerary} = require('../controllers/itineraryController')

const router = express.Router()

router.get('/cities', getCities)
router.get('/city/:id', getCity)
router.get('/city/itineraries/:id', getCityItineraries)
router.post('/city', addCity)
router.put('/city/:id', editCity)
router.delete('/city', deleteCity)
router.get('/filter', filterCities)

router.get('/itineraries', getItineraries)
router.get('/itinerary/:id', getItinerary)
router.post('/itinerary', addItinerary)
router.put('/itinerary/:id', editItinerary)
router.delete('/itinerary', deleteItinerary)

module.exports = router