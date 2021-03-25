import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - USER SCHEMA
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean }
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - PASSWORD CONFIRMATION
userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - PASSWORD CHECK
userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
  })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - BCRYPT HASH
userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - PASSWORD COMPARE FOR LOGIN
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - PASSWORD COMPARE
userSchema.set('toJSON', {
  virtuals: true,
  transform (_doc, json) {
    delete json.password
    return json
  }
})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - EXPORT

export default mongoose.model('User', userSchema)
