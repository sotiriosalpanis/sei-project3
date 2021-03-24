import User from '../models/user.js'
// import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Hello ${newUser.username}` })
  } catch (err) {
    console.log('error', err)
    return res.status(422).json(err)
  }
}

export const loginUser = async (req, res) => {
    try {
      const userToLogin = await User.findOne({ email: req.body.email })
      if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
        throw new Error()
      }
      const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })
      return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token })
    } catch (err) {
      console.log(err)
      return res.status(422).json({ message: 'Unauthorized' })
    }
  }

  