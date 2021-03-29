import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import userData from './data/seededUsers.js'
import User from '../models/user.js'
import festivalData from './data/seededFestivals.js'
import Festival from '../models/festival.js'
import artistData from './data/seededArtists.js'
import Artist from '../models/artist.js'

const seedDatabase = async () => {
  try {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - connect to the db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - clear DB
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add users to the db
    const users = await User.create(userData)
    console.log(`🌱 DB seeded with ${users.length} users`)

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - add festivals with an owner
    const festivalsWithUsers = festivalData.map(festival => {
      festival.owner = users[0]._id
      return festival
    })
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add festivals
    const festivals = await Festival.create(festivalsWithUsers)

    console.log(`🌱 DB seeded with ${festivals.length} festivals`)

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add Artists with user to db
    // const artistsWithFestival = artistData.map(artist => {
    //   artist.owner = users[0]._id
    //   return artist
    // })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Add Artists
    const artists = await Artist.create(artistData)

    console.log(`🌱 DB seeded with ${artists.length} artists`)

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - close connection with db
    await mongoose.connection.close()
    console.log('✌ Bye!')
  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log('✌ Bye!')
  }
}

seedDatabase()
