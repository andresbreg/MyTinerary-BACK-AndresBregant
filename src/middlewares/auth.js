const Joi = require('joi')

const userSchema = Joi.object({
  name: Joi.string().min(2).max(24).required().messages({
    'string.empty': 'Please, enter your name.',
    'string.min': 'The name must be at least 2 characters.',
    'string.max': 'The name must be at most 24 characters.'
  }),
  last_name: Joi.string().min(2).max(24).required().messages({
    'string.empty': 'Please, enter your last name.',
    'string.min': 'The last name must be at least 2 characters.',
    'string.max': 'The last name must be at most 24 characters.'
  }),
  photo: Joi.string().uri().min(8).messages({
    'string.uri': 'Please, enter a valid location.',
    'string.min': 'The photo location must be at least 8 characters.'
  }),
  country: Joi.string().required().messages({
    'string.empty': 'Please, select your country.',
  }),
  email: Joi.string().email().min(8).max(48).required().messages({
    'string.empty': 'Please, enter your email.',
    'string.email': 'Please, enter a valid email.',
    'string.min': 'The email must be at least 8 characters.',
    'string.max': 'The email must be at most 48 characters.'
  }),
  password: Joi.string().alphanum().min(8).max(24).required().messages({
    'string.empty': 'Please, enter a password.',
    'string.alphanum': 'Please, enter a valid password.',
    'string.min': 'The password must be at least 8 characters.',
    'string.max': 'The password must be at most 24 characters.'
  })
})

const verifyAuthData = (req,res,next) => {
  const payload = req.body
  const validatedUser = userSchema.validate(payload)
  if (validatedUser.error) {
    return res.status(400).json({
      messages: validatedUser.error.details.map(
        error => error.message
      )
    })
  }
  next()
}

module.exports = {verifyAuthData}