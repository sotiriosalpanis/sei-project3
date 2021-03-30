import mongoose from 'mongoose'

const festivalImageSchema = new mongoose.Schema({
  userImages: [{ type: String }]
})

// const festivalAttendanceSchema = new mongoose.Schema({
//   interested: { type: Boolean, default: false },
//   going: { type: Boolean, default: false },
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// })

const commentSchema = new mongoose.Schema({
  text: { type: String, maxlength: 300 },
  attending: { type: Boolean },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamp: true
})

const festivalSchema = new mongoose.Schema({
  festivalName: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  website: { type: String },
  price: { type: Number },
  // lineup: [{ type: mongoose.Schema.ObjectId, ref: 'Artist' }],
  lineup: [{ type: String }],
  venue: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  mainFestivalImage: { type: String, required: true },
  userImages: { festivalImageSchema },
  comment: [commentSchema]
})

export default mongoose.model('Festival', festivalSchema)
