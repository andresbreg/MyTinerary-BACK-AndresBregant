const express = require('express')
const {verifyRegistrationData, verifyLoginData} = require('../middlewares/user')
const {hashPassword} = require('../middlewares/password')
const {registerUser, login} = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', verifyRegistrationData, hashPassword, registerUser)
authRouter.post('/login', verifyLoginData, login)

module.exports = authRouter