import mongoose from 'mongoose'

const festivalImageSchema = new mongoose.Schema({
  userImages: [{ type: String }]
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Referanced Attendace Schema
const attendanceSchema = new mongoose.Schema({
  text: { type: String, maxlength: 300 },
  going: { type: Boolean },
  interested: { type: Boolean },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamp: true
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Festival Schema
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
  festivalAttendance: [attendanceSchema]
})

export default mongoose.model('Festival', festivalSchema)
