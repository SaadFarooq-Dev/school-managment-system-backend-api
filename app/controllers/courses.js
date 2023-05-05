import courseModel from "../models/Course.js";
import { handleQuerySort } from "../utils/handleQuerySort.js";

export const createCourse = async (req, res, next) => {
  const { name } = req.body
  try {
    const course = await courseModel.create({ name });
    return res.status(200).json(course);
  } catch (error) {
    next(error)
  }
}

export const getAllCourses = async (req, res, next) => {
  try {
    const sort = req.query.sort ? handleQuerySort(req.query.sort) : { createdAt: -1 }

    const course = await courseModel.find(req.body).sort(sort);
    return res.status(200).json(course);
  } catch (error) {
    next(error)
  }
}

export const getCourse = async (req, res, next) => {
  try {
    const course = await courseModel.findById(req.params.id)
    if (course) {
      return res.status(200).json(course);
    }
    return res.status(400).json({ errors: [{ msg: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}
export const patchCourse = async (req, res, next) => {
  try {
    const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (course) {
      return res.status(200).json(course);
    }
    return res.status(400).json({ errors: [{ msg: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}

export const deleteCourse = async (req, res, next) => {
  try {
    const course = await courseModel.deleteOne({ _id: req.params.id })
    if (course.deletedCount) {
      return res.status(200).json(`Course: ${req.params.id} deleted`);
    }
    return res.status(400).json({ errors: [{ msg: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}
