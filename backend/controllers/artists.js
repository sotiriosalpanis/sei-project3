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

  export const addArtist =  async (req, res) => {

    if (!req.currentUser) {
      return res.status(401).json({ message: 'Hey! You need to login to do that!' })
    }

    if (!req.currentUser || req.currentUser.isAdmin !== true) {
      return res.status(401).json({ message: 'Hey! You need to be an Admin to do that!' })
    }

    try {
      const newArtist = { ...req.body, owner: req.currentUser._id }
      const artistToAdd = await Artist.create(newArtist)
      return res.status(201).json(artistToAdd)
    } 
    
    catch (error) {
      if (error.message.indexOf("11000")) {
        return res.status(422).json({ message: 'Woah! That Artist already exists!' })
      }
      if (error instanceof SyntaxError) {
      console.log('ERROR>', error)
      return res.status(422).json({ message: 'Woah there! You have not entered the information correctly' })
      }
    }
  }