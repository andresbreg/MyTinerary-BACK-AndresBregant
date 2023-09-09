const express = require('express')
const {verifyRegistrationData, verifyLoginData} = require('../middlewares/user')
const {hashPassword, verifyUser, verifyPassword, generateToken} = require('../middlewares/auth')
const {registerUser, login} = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', verifyRegistrationData, hashPassword, registerUser)
authRouter.post('/login', verifyLoginData, verifyUser, verifyPassword, generateToken, login)

module.exports = authRouter