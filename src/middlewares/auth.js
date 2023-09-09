const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const hashPassword = (req,res,next) => {
  try {
    const password = req.body.password
    const hashPassword = bcrypt.hashSync(password, 10)
    req.body.password = hashPassword
    next()
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

const verifyUser = async (req,res,next) => {
  const {email} = req.body
  const userFound = await User.findOne({email: email})
  if (userFound) {
    req.user = userFound 
    next()
  }
  else res.status(400).json({message: 'User not found'})
}

const verifyPassword = (req,res,next) => {
  const password = req.body.password
  const hashPassword = req.user.password
  const validPassword = bcrypt.compareSync(password, hashPassword)
  if (validPassword) next()
  else res.status(400).json({message: 'Invalid password'})
}

const generateToken = (req,res,next) => {
  try {
    let secretKey = 'secretKey'
    let token = jwt.sign({email: req.body.email}, secretKey, {expiresIn: 60*3})
    req.token = token
    next()
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {hashPassword, verifyUser, verifyPassword, generateToken}