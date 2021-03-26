import Artist from '../models/artist.js'

export const getAllArtists = async (_req, res) => {
  console.log('REQUEST MADE')
  const artists = await Artist.find()
  console.log('GETTING ARTISTS>>', artists)
  return res.status(200).json(artists)
}

export const getOneArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id)
    if (!singleArtist) {
      throw new Error('No Artists with this id found>>', id)
    }
    return res.status(200).json(singleArtist)
  } catch (err) {
    console.log('📍Error in getOneArtist>>', err)
    return res.status(404).json({ message: 'Not found' })
  }
}
