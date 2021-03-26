import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

export default mongoose.model('Artist', artistSchema)
