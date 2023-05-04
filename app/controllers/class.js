import { classModel } from "../models/Class.js";

export const createClass = async (req, res,next)=>{
  const {name, classTeacherId, courses} = req.body
  try {
    const classobj = await classModel.create({ name, classTeacherId, courses});
    return res.status(200).json(classobj);
  } catch (error) {
    next(error)
  }
}
