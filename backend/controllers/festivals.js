import Festival from '../models/festival.js'
// import seededFestivals from '../db/data/seededFestivals.js'

export const getAllFestivals = async (_req, res) => {
  console.log("REQUEST MADE")
  // const festivals = await seededFestivals
  const festivals = await Festival.find()
  console.log('GETTING FESTIVALS>>', festivals)
  return res.status(200).json(festivals)
}

export const addFestival = async (req, res) => {
  try {
    const festivalToAdd = await Festival.create(req.body)
    return res.status(201).json(festivalToAdd)
  } catch (err) {
    console.log('🥴 could not add the festival')
    console.log(err)
    return res.status(422).json(err)
  }
}

export const getOneFestival = async (req, res) => {
  try{
    const { id } = req.params
    const singleFestival = await Festival.findById(id)
    if (!singleFestival) {
      throw new Error('No festival with this id found>>', id)
    }
    return res.status(200).json(singleFestival)
  } catch (err) {
    console.log('📍Error in getOneFestival>>', err)
    return res.status(404).json({'message':'Not found'})
  }
}


export const updateFestival = async (req, res ) => {
  try {
    const { id } = req.params
    const festivalToUpdate = await Festival.findById(id)
    if (!festivalToUpdate) throw new Error('Could not find festival to PUT info into')
    Object.assign(festivalToUpdate,req.body)
    await festivalToUpdate.save()
    return res.status(202).json(festivalToUpdate)
  } catch (err) {
    console.log('🥴 could not PUT info into the festival')
    console.log(err)
    return res.status(404).json(err)
  }
}