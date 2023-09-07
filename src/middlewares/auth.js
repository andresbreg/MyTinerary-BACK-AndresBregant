const bcrypt = require('bcrypt')

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

module.exports = {hashPassword}