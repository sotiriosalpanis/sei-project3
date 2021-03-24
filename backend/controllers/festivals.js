import Festival from '../models/festival.js'
import seededFestivals from '../db/data/seededFestivals.js'

export const getAllFestivals = async (_req, res) => {
  const festivals =await seededFestivals
  console.log('GETTING FESTIVALS>>', festivals)
  return res.status(200).json()
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