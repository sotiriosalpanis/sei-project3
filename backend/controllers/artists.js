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
    console.log('Error in getOneArtist>>', err)
    return res.status(404).json({ message: 'Not found' })
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export const addArtist = async (req, res) => {
  console.log(req.currentUser)
=======
<<<<<<< HEAD
  export const addArtist =  async (req, res) => {
    console.log(req.currentUser)
>>>>>>> development

  try {
    if (!req.currentUser) {
      return res.status(401).json({ message: 'Hey! You need to login to do that!' })
    }
    if (req.currentUser.isAdmin !== true) {
      return res.status(401).json({ message: 'Woah! You need to be an Admin for that!' })
=======
=======
>>>>>>> bef36c40384ecc882bef81ab166c3e4e309d181d
export const addArtist = async (req, res) => {
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
  } catch (error) {
    if (error.message.indexOf('11000')) {
      return res.status(422).json({ message: 'Woah! That Artist already exists!' })
    }
<<<<<<< HEAD
  } catch (err) {
    console.log('ERROR>', err)
    return res.status(422).json({ message: 'Woah there! You have not entered the information correctly' })
=======
    if (error instanceof SyntaxError) {
      console.log('ERROR>', error)
      return res.status(422).json({ message: 'Woah there! You have not entered the information correctly' })
    }
>>>>>>> development
  }
}

export const showArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id).populate('owner')
    if (!singleArtist) {
      throw new Error('Cannot find that Artist!')
    }
    return res.status(200).json(singleArtist)
  } catch (err) {
    console.log('Woah there! That is not correct!', err)
    return res.status(404).json({ message: err.message })
  }
}

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

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params
    const singleArtist = await Artist.findById(id)
    if (!singleArtist) throw new Error('Woah, that Artists is not here!')
    Object.assign(singleArtist, req.body)
    await singleArtist.save()
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(202).json({ 'Updated Artist': singleArtist })
=======
<<<<<<< HEAD
    return res.status(202).json({ 'Updated Artist': singleArtist })    
=======
    return res.status(202).json('updated!', singleArtist)
>>>>>>> 530ed0208752d48db93ea3c2866d5cb0cc32a8d2
>>>>>>> development
=======
    return res.status(202).json({ 'Updated Artist': singleArtist })
>>>>>>> bef36c40384ecc882bef81ab166c3e4e309d181d
  } catch (err) {
    console.log('Woah there! Cannot update this artist')
    console.log(err)
    return res.sendStatus(404).json({ message: err.message })
  }
}
