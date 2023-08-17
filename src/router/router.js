const express = require('express')
const router = express.Router()
const { addClient, getClient, getClients } = require('../controllers/clientsController')

router.get('/clients', getClients)
router.get('/client/:id', getClient)
router.post('/client', addClient)

module.exports = router