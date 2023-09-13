const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema ({
  name: { type:String, required:true },
  last_name: { type:String, required:true },
  email: { type:String, required:true },
  password: { type:String, required:true },
  picture: { type:String },
  country: { type:String, required:true }
})

const User = model('User', userSchema)

module.exports = User