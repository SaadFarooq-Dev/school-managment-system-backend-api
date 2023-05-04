import { model, Schema } from "mongoose";
import userModel from "./User.js";

const classSchema = new Schema({
  name: {
    type: String,
    max: 255,
    required: true,
  },
  classTeacherId: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true,
    unique: true,
  },
  courses: {
    type: Array,
    required: true,
  }
}, { timestamps: true })

classSchema.pre('save', async function (next) {
  try {
    const user = await userModel.findById(this.classTeacherId)
    if (user) {
      next()
    }
    throw Error("Referenced UserId not found")
  } catch (error) {
    next(error)
  }

})

export const classModel = model('Class', classSchema);

