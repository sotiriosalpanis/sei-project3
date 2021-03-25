import express from 'express'
import { getAllFestivals, getOneFestival, addFestival, updateFestival, deleteFestival } from '../controllers/festivals.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getUserProfile } from '../controllers/users.js'
import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

router.route('/festivals')
  .get(getAllFestivals)
  .post(secureRoute, addFestival) //! Building without secure route- will need to be added later

router.route('/festivals/:id')
  .get(getOneFestival)
  .put(secureRoute, updateFestival) //! Building without secure route- will need to be added later
  .delete(secureRoute, deleteFestival) //! Building without secure route- will need to be added later

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)

export default router
