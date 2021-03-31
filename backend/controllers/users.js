import User from '../models/user.js'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get users profile
export const getUserProfile = async (req, res) => {
  console.log(req.currentUser)
  try {
    const user = await User.findById(req.currentUser._id)
    console.log('USER >>', user)
    if (!user) throw new Error('User not found')
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Get all profiles
export const getAllProfiles = async (req, res) => {
  console.log('REQUEST MADE')
  const profiles = await User.find()
  console.log('GETTING ARTISTS>>', profiles)
  return res.status(200).json(profiles)
}
