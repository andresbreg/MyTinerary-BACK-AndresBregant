const { Schema, model, Types } = require('mongoose')

const clientSchema = new Schema ({
  name: { type:String, required:true },
  lastName: { type:String, required:true },
  age: { type:Number, required:true }
})

const Client = model('Client', clientSchema)

module.exports = Client