const express = require('express')
const { getCities, getCity, addCity, editCity, deleteCity } = require('../controllers/citiesController')
const filterCities = require('../controllers/filterController')

const router = express.Router()

router.get('/cities', getCities)
router.get('/city/:id', getCity)
router.post('/city', addCity)
router.put('/city/:id', editCity)
router.delete('/city', deleteCity)
router.get('/filter', filterCities)

module.exports = router