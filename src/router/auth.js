const express = require('express')
const {verifyAuthData} = require('../middlewares/user')
const {hashPassword} = require('../middlewares/auth')
const {registerUser} = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, hashPassword, registerUser)

module.exports = authRouter