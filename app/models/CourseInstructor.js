import { model, Schema } from 'mongoose'

const courseInstructorSchema = new Schema({
  courseId: {
    type: String,
    ref: 'Course',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

courseInstructorSchema.index({ courseId: 1, userId: 1 }, { unique: true })
const courseInstructorModel = model('CourseInstructor', courseInstructorSchema)

export default courseInstructorModel
