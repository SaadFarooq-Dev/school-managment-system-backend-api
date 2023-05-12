import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Monogdb Connected....')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
