const express = require('express')
const router = express.Router()
const { getCities, getCity, addCity, editCity, deleteCity } = require('../controllers/citiesController')

router.get('/cities', getCities)
router.get('/city/:id', getCity)
router.post('/city', addCity)
router.put('/city/:id', editCity)
router.delete('/city', deleteCity)

module.exports = router