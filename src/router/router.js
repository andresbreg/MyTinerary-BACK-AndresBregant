const express = require('express')
const router = express.Router()
const { getClients, getClient, addClient, editClient, deleteClient } = require('../controllers/clientsController')

router.get('/clients', getClients)
router.get('/client/:id', getClient)
router.post('/client', addClient)
router.put('/client/:id', editClient)
router.delete('/client', deleteClient)

module.exports = router