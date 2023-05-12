import { model, Schema } from 'mongoose'

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

const courseModel = model('Course', courseSchema)

export default courseModel
