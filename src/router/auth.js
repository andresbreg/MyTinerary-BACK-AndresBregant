const express = require('express')
const {verifyAuthData} = require('../middlewares/auth')
const {registerUser} = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, registerUser)

module.exports = authRouter