const express = require('express')

const router = express.Router()
const authRouter = require('./auth')

const {getCities, getCity, getCityItineraries, addCity, editCity, deleteCity} = require('../controllers/cityController')
const {filterCities} = require('../controllers/filterController')
const {getItineraries, getItinerary, addItinerary, editItinerary, deleteItinerary} = require('../controllers/itineraryController')

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

router.use('/user', authRouter)

module.exports = router