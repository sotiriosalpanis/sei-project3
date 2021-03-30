import Festival from '../models/festival.js'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get all festivals
export const getAllFestivals = async (_req, res) => {
  console.log('REQUEST MADE')
  const festivals = await Festival.find().populate('owner').populate('attendance.owner')
  console.log('GETTING Festival>>', festivals)
  return res.status(200).json(festivals)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get one festival
export const getOneFestival = async (req, res) => {
  try {
    const { id } = req.params
    const singleFestival = await Festival.findById(id)
    if (!singleFestival) {
      throw new Error('No Festival with this id found>>', id)
    }
    return res.status(200).json(singleFestival)
  } catch (err) {
    console.log('Error in getOneFestival>>', err)
    return res.status(404).json({ message: 'Not found' })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add festivals
export const addFestival = async (req, res) => {
  console.log(req.currentUser)

  if (!req.currentUser) {
    return res.status(401).json({ message: 'Hey! You need to login to do that!' })
  }
  if (req.currentUser.isAdmin !== true) {
    return res.status(401).json({ message: 'Woah! You need to be an Admin for that!' })
  }
  try {
    const newFestival = { ...req.body, owner: req.currentUser._id }
    const festivalToAdd = await Festival.create(newFestival)
    return res.status(201).json(festivalToAdd)
  } catch (error) {
    if (error.message.indexOf('11000')) {
      console.log(error)
      return res.status(422).json({ message: error.message })
    }
    if (error instanceof SyntaxError) {
      console.log('ERROR>', error)
      return res.status(422).json({ message: error.message })
    }
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get festival by ID
// export const showFestival = async (req, res) => {
//   try {
//     const { id } = req.params
//     const singleFestival = await Festival.findById(id).populate('owner').populate('attendance.owner')
//     if (!singleFestival) {
//       throw new Error('Cannot find that Festival!')
//     }
//     return res.status(200).json(singleFestival)
//   } catch (err) {
//     console.log('Woah there! That is not correct!', err)
//     return res.status(404).json({ message: err.message })
//   }
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Delete festival by ID
export const deleteFestival = async (req, res) => {
  try {
    const { id } = req.params
    const singleFestival = await Festival.findById(id)
    if (!singleFestival) throw new Error('Woah, that Festival is not here!')
    await singleFestival.remove()
    return res.status(202).json({ message: 'removed successfully' })
  } catch (err) {
    console.log('Woah there! Cannot delete this Festival')
    console.log(err)
    return res.sendStatus(404).json({ message: err })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Update festival by ID
export const updateFestival = async (req, res) => {
  try {
    const { id } = req.params
    const singleFestival = await Festival.findById(id)
    if (!singleFestival) throw new Error('Woah, that Festival is not here!')
    Object.assign(singleFestival, req.body)
    await singleFestival.save()
    return res.status(202).json({ 'Updated Festival': singleFestival })
  } catch (err) {
    console.log('Woah there! Cannot update this festival')
    console.log(err)
    return res.sendStatus(404).json({ message: err.message })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add attendance to festival by ID

export const addAttendanceToFestival = async (req, res) => {
  try {
    const { id } = req.params
    const festival = await Festival.findById(id)
    if (!festival) throw new Error('Cannot find festival')
    const newAttendance = { ...req.body, owner: req.currentUser._id }
    festival.attendance.push(newAttendance)
    await festival.save()
    return res.status(200).json(festival)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const deleteAttendanceFromFestival = async (req, res) => {
  try {
    const { id, attendanceId } = req.params
    const festival = await Festival.findById(id)
    if (!festival) throw new Error('festival not found')
    const attendanceToDelete = festival.attendances.id(attendanceId)
    if (!attendanceToDelete) throw new Error('attendance not found')
    if (!attendanceToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
    await attendanceToDelete.remove()
    await festival.save()
    return res.status(204).json()
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

// export const addAttendanceToFestival = async (req, res) => {
//   try {
//     const { id } = req.params
//     const festival = await Festival.findById(id)
//     if (!festival) throw new Error('Cannot find that festival!')
//     const newAttendanceInfo = { ...req.body, user: req.currentUser._id }
//     const attendeeMatch = festival.festivalAttendance.filter((fest, index) => {
//       const check = String(fest.user) === String(req.currentUser._id)
//       console.log('Check', check)
//       return index
//     }
//     )
//     if (attendeeMatch.length === 0) {
//       console.log('ATTENDEE', newAttendanceInfo)
//       festival.festivalAttendance.push(newAttendanceInfo)
//     } else {
//       console.log('No', newAttendanceInfo)
//       festival.festivalAttendance[attendeeMatch] = { ...newAttendanceInfo }
//     }
//     await festival.save()
//     return res.status(200).json(festival)
//   } catch (err) {
//     console.log(err)
//     return res.status().json({ message: err.message })
//   }
// }
