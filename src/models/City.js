const { Schema, model, Types } = require('mongoose')

const citySchema = new Schema ({
  name: { type:String, required:true },
  country: { type:String, required:true },
  continent: { type:String, required:true },
  photo: { type:String, required:true },
  summary: { type:String, required:true }
})

const City = model('City', citySchema)

module.exports = City