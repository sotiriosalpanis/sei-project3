import express from 'express'
import { getAllFestivals, getOneFestival, addFestival, updateFestival, deleteFestival, addAttendanceToFestival, deleteAttendanceFromFestival } from '../controllers/festivals.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getUserProfile, getAllProfiles } from '../controllers/users.js'
import { secureRoute, secureRouteAdmin } from '../config/secureRoute.js'
import { getAllArtists, addArtist, getOneArtist, updateArtist, deleteArtist } from '../controllers/artists.js'

const router = express.Router()

router.route('/festivals')
  .get(getAllFestivals)
  .post(secureRouteAdmin, addFestival)

router.route('/festivals/:id')
  .get(getOneFestival)
  .put(secureRouteAdmin, updateFestival)
  .delete(secureRouteAdmin, deleteFestival)

router.route('/festivals/:id/attendance')
  .post(secureRoute, addAttendanceToFestival)

router.route('/festivals/:id/attendance/:attendanceId')
  .delete(secureRoute, deleteAttendanceFromFestival)

router.route('/artists')
  .get(getAllArtists)
  .post(secureRouteAdmin, addArtist)

router.route('/artists/:id')
  .get(secureRouteAdmin, getOneArtist)
  .put(secureRouteAdmin, updateArtist)
  .delete(secureRouteAdmin, deleteArtist)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)

router.route('/profiles')
  .get(secureRouteAdmin, getAllProfiles)

export default router
