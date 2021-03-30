import mongoose from 'mongoose'

const festivalImageSchema = new mongoose.Schema({
  userImages: [{ type: String }]
})

// adds an array to the end of each festival to store comments / and attending info
const attendanceSchema = new mongoose.Schema({
  text: { type: String, maxlength: 300 },
  attending: { type: Boolean },
  interested: { type: Boolean },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamp: true
})

// Festival Schema
const festivalSchema = new mongoose.Schema({
  festivalName: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  website: { type: String },
  price: { type: Number },
  lineup: [{ type: String }],
  venue: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  mainFestivalImage: { type: String, required: true },
  userImages: { festivalImageSchema },
  attendance: [attendanceSchema]
})

export default mongoose.model('Festival', festivalSchema)
