import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true, unique: true },
  genre: { type: String },
  website: { type: String },
  twitter: { type: String},
  instagram: { type: String}
})

export default mongoose.model('Artist',artistSchema)