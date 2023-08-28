const { Schema, model, Types } = require('mongoose')

const itinerarySchema = new Schema ({
  name: { type:String, required:true },
  author: { type:String, required:true },
  photo: { type:String, required:true },
  price: { type:Number, required:true,
    validate: {
      validator: value => value >= 1 && value <= 5,
      message: 'Price must be a value between 1 and 5.'
    }
  },
  duration: { type:Number, required:true },
  likes: { type:Number, default:0 },
  hashtags: { type:[String], required:true },
  comments: { type:[String], required:true },
  _city: { type:Types.ObjectId, ref:'City', required:true }
})

const Itinerary = model('Itinerary', itinerarySchema)

module.exports = Itinerary