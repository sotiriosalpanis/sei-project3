import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import festivalData from './data/seededFestivals.js'
import userData from './data/seededUsers.js'
import Festival from '../models/festival.js'
import User from '../models/user.js'

const seedDatabase = async () => {
  try {
    // * Connect to database
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    // * clear the db
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

    // * add users to db
    const users = await User.create(userData)
    console.log(`🌱 DB seeded with ${users.length} users`)

    // * add owner to festival
    const festivalsWithUsers = festivalData.map(festival => {
      festival.owner = users[0]._id
      return festival
    })

    // * add shows to db
    const festivals = await Festival.create(festivalsWithUsers)
    // console.log('Festivals >>', festivals)

    console.log(`🌱 DB seeded with ${festivals.length} festivals`)

    // * close the connection
    await mongoose.connection.close()
    console.log('✌ Bye!')
  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log('✌ Bye!')
  }
}

seedDatabase()
