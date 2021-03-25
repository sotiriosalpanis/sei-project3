import mongoose from 'mongoose'

// oversimplifed to test AUTH functions

const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true, unique: true },
  genre: { type: String, required: true }
})

export default mongoose.model('Artist', artistSchema)
