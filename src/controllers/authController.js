const User = require('../models/User')

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
      newUser
    })
  }
  catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {registerUser}