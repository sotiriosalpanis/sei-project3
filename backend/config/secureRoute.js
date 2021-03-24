//   import { secret } from '../config/environment.js'
//   import User from '../models/user.js'
//import jwt from 'jsonwebtoken'

//   export const secureRoute = async (req, res, next) => {
//   try {
//     if (!req.headers.authorization) throw new Error('Missing header')

//     const token = req.headers.authorization.replace('Bearer ', '')
//     const payload = jwt.verify(token, secret)
//     const userToVerify = await User.findById(payload.sub)
//     console.log('user?', userToVerify)
//     if (!userToVerify) throw new Error('User not found')
//     next()

//   } catch (err) {
//     console.log(err)
//     return res.status(401).json({ message: 'unauthorized user' })
//   }
// }
