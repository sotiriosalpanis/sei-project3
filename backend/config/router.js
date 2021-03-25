import express from 'express'
import { getAllFestivals, getOneFestival } from '../controllers/festivals.js'
import { registerUser } from '../controllers/auth.js'
// import { getUserProfile } from '../controllers/users.js'
// import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

router.route('/festivals')
  .get(getAllFestivals)

router.route('/festivals/:id')
  .get(getOneFestival)

router.route('/register')
  .post(registerUser)

export default router
