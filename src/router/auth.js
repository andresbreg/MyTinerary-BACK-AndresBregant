const express = require('express')
const {verifyRegistrationData, verifyLoginData} = require('../middlewares/user')
const {hashPassword, verifyUser, verifyPassword, generateToken, verifyPassport} = require('../middlewares/auth')
const {registerUser, login, auth, logout} = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', verifyRegistrationData, hashPassword, registerUser)
authRouter.post('/login', verifyLoginData, verifyUser, verifyPassword, generateToken, login)
authRouter.post('/auth', verifyPassport.authenticate('jwt', {session: false}), generateToken, auth)
authRouter.post('/logout', verifyPassport.authenticate('jwt', {session: false}), logout)

module.exports = authRouter