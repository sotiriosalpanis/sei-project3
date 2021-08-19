const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sei-project3'
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'Alright then, keep your secrets'

module.exports = {
  dbURI,
  port,
  secret
}
