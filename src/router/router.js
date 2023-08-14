const express = require('express')
const router = express.Router()
const { getClient, getClients } = require('../controllers/clientsController')

router.get('/client/:id', getClient)
router.get('/clients', getClients)

module.exports = router