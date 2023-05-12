import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

import { userRole } from '../constants/enum.js'
const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    max: 255,
    required: true
  },
  email: {
    type: String,
    max: 255,
    unique: true,
    required: true
  },
  password: {
    type: String,
    max: 255,
    required: true
  },
  role: {
    type: String,
    enum: userRole,
    required: true
  },
  joinDate: {
    type: Date,
    default: new Date(),
    required: false
  },
  semester: {
    type: Number,
    default: null,
    required: false
  }
}, {
  timestamps: true
})

userSchema.pre('save', async function (next) {
  const saltRound = 10
  const password = this.password

  const salt = await bcrypt.genSalt(saltRound)
  const hash = await bcrypt.hash(password, salt)

  this.password = hash
  next()
})

userSchema.methods.isValidPassword = async function (password) {
  const user = this
  const isPasswordValid = await bcrypt.compare(password, user.password)
  console.log('instance method isValidPassword ran: ' + isPasswordValid)

  return isPasswordValid
}

const userModel = mongoose.model('User', userSchema)

export default userModel
