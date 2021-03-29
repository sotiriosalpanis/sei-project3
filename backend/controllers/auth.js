import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log('new user ', newUser)
    return res.status(202).json({ message: `Welcome ${newUser.username}!` })
  } catch (err) {
    console.log('error', err)
    return res.status(422).json({ message: err })
  }
}

export const loginUser = async (req, res) => {
  try {
    const userToLogin = await User.findOne(
      { $or: [{ email: req.body.email }, { username: req.body.username }]}) 
    if (!userToLogin) {
      throw new ReferenceError('Woah! Have you registered?')
    }
    if (!userToLogin.validatePassword(req.body.password)) {
      throw new ReferenceError('Hmm... That\'s not correct')
    }
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })
    return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token })
  } 
  catch (err) {
    console.log('AUTH ERROR!', err)
    return res.status(422).json({ message: err.message })
  }
}
