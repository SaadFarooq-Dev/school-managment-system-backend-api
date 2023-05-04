import { Model, Schema } from "mongoose";


const subjectSchema = new Schema({

  name: {
    type: String,
    required: true,
  }
},{timestamps: true})

const subjectModel = mongoose.model('Subject', subjectSchema);

export default subjectModel;
