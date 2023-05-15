import courseInstructorModel from '../models/CourseInstructor.js'
import { handleQuerySort } from '../utils/handleQuerySort.js'

export const createCourseInstructor = async (req, res, next) => {
  const { courseId, userId } = req.body
  try {
    const courseInstructor = await courseInstructorModel.create({ courseId, userId })
    return res.status(200).json(courseInstructor)
  } catch (error) {
    next(error)
  }
}

export const getAllcourseInstructors = async (req, res, next) => {
  try {
    const sort = req.query.sort ? handleQuerySort(req.query.sort) : { createdAt: -1 }

    const courseInstructor = await courseInstructorModel.find(req.body).sort(sort)
    return res.status(200).json(courseInstructor)
  } catch (error) {
    next(error)
  }
}

export const getCourseInstructor = async (req, res, next) => {
  try {
    const courseInstructor = await courseInstructorModel.findById(req.params.id)
    if (courseInstructor) {
      return res.status(200).json(courseInstructor)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}

export const patchcourseInstructor = async (req, res, next) => {
  try {
    const courseInstructor = await courseInstructorModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (courseInstructor) {
      return res.status(200).json(courseInstructor)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}

export const deleteCourseInstructor = async (req, res, next) => {
  try {
    const courseInstructor = await courseInstructorModel.deleteOne({ _id: req.params.id })
    if (courseInstructor.deletedCount) {
      return res.status(200).json(`class: ${req.params.id} deleted`)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}
