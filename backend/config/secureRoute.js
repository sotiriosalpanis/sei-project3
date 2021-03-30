import { secret } from '../config/environment.js'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Secure route
export const secureRoute = async (req, res, next) => {
  if (req.headers.authorization === 'Bearer') throw new Error('Woah! You need to Login for that!')
  try {
    if (!req.headers.authorization) throw new Error('Missing header')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, secret)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('You need to login!')
    req.currentUser = userToVerify
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: err })
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Admin secure route
export const secureRouteAdmin = async (req, res, next) => {
  try {
    if (req.headers.authorization === 'Bearer') throw new Error('Woah! You need to Login for that!')
    if (!req.headers.authorization) throw new Error('Missing header')
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, secret)
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('You need to login!')
    req.currentUser = userToVerify
    if (userToVerify.isAdmin !== true) throw new Error('Woah! You need to be an Admin for that!')
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: err.message })
  }
}
