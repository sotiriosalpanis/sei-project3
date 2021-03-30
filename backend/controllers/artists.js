import Artist from '../models/artist.js'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get all artists
export const getAllArtists = async (_req, res) => {
  const artists = await Artist.find()
  return res.status(200).json(artists)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get one artist
export const getOneArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id)
    if (!singleArtist) {
      throw new Error('No Artists with this id found>>', id)
    }
    return res.status(200).json(singleArtist)
  } catch (err) {
    console.log('Error in getOneArtist>>', err)
    return res.status(404).json({ message: 'Not found' })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add artist
export const addArtist = async (req, res) => {
  try {
    if (!req.currentUser) {
      return res.status(401).json({ message: 'Hey! You need to login to do that!' })
    }
    if (req.currentUser.isAdmin !== true) {
      return res.status(401).json({ message: 'Woah! You need to be an Admin for that!' })
    }
  } catch (err) {
    console.log('ERROR>', err)
    return res.status(422).json({ message: 'Woah there! You have not entered the information correctly' })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Delete Artist
export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id)
    if (!singleArtist) throw new Error('Woah, that Artists is not here!')
    await singleArtist.remove()
    return res.status(202).json({ message: 'removed successfully' })
  } catch (err) {
    console.log('Woah there! Cannot delete this artist')
    console.log(err)
    return res.sendStatus(404).json({ message: err })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Update Artist
export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id)
    if (!singleArtist) throw new Error('Woah, that Artists is not here!')
    Object.assign(singleArtist, req.body)
    await singleArtist.save()
    return res.status(202).json({ 'Updated Artist': singleArtist })
  } catch (err) {
    console.log('Woah there! Cannot update this artist')
    console.log(err)
    return res.sendStatus(404).json({ message: err.message })
  }
}
