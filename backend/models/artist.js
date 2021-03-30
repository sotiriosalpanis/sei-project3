import mongoose from 'mongoose'

// Need to populate this with each festival they are attending. use a populate? Or every artists is a referance to the festival schema and each artist is created via that schema. Might be better to do this on the front end, interate over each festival.lineup then sort/set to display each artists and each festival they are attending.

const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true, unique: true },
  festivals: [{ type: String }]
})

export default mongoose.model('Artist', artistSchema)
