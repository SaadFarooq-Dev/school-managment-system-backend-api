import { model, Schema } from "mongoose";


const courseInstructorSchema = new Schema({
  subjectId: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const courseInstructorModel = model('CourseInstructor', courseInstructorSchema);

export default courseInstructorModel;
