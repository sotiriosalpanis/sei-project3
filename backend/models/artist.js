import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true, unique: true }
})

export default mongoose.model('Artist', artistSchema)
