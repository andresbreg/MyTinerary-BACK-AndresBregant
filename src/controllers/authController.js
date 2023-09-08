const User = require('../models/User')
const {verifyPassword} = require('../middlewares/password')

const registerUser = async (req,res) => {
  try {
    const payload = req.body
    const userExists = await User.findOne({ email: payload.email })
      if (userExists) {
        return res.status(403).json({message: 'User already exists'})
      }
    const newUser = await User.create(payload)
    res.status(200).json({
      message: 'New user created successfully',
      user: newUser
    })
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
}

const login = async (req,res) => {
  try {
    const {email, password} = req.body
    const userFound = await User.findOne({email: email})
    if (userFound) {
      if (verifyPassword(password, userFound.password)) {
        return res.status(200).json({
          message: 'User successfully logged in',
          user: userFound
        })
      }
      else res.status(400).json({message: 'Invalid password'})
    }
    else res.status(400).json({message: 'User not found'})
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = {registerUser, login}