import { classModel } from '../models/Class.js'
import { handleQuerySort } from '../utils/handleQuerySort.js'

export const createClass = async (req, res, next) => {
  const { name, classTeacherId, courses } = req.body
  try {
    const classobj = await classModel.create({ name, classTeacherId, courses })
    return res.status(200).json(classobj)
  } catch (error) {
    next(error)
  }
}

export const getAllClasses = async (req, res, next) => {
  try {
    const sort = req.query.sort ? handleQuerySort(req.query.sort) : { createdAt: -1 }

    const classobj = await classModel.find(req.body).sort(sort)
    return res.status(200).json(classobj)
  } catch (error) {
    next(error)
  }
}

export const getClass = async (req, res, next) => {
  try {
    const classobj = await classModel.findById(req.params.id)
    if (classobj) {
      return res.status(200).json(classobj)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}
export const patchClass = async (req, res, next) => {
  try {
    const classobj = await classModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (classobj) {
      return res.status(200).json(classobj)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}

export const deleteClass = async (req, res, next) => {
  try {
    const classobj = await classModel.deleteOne({ _id: req.params.id })
    if (classobj.deletedCount) {
      return res.status(200).json(`class: ${req.params.id} deleted`)
    }
    return res.status(400).json({ errors: [{ message: 'No such document exists for the given Id' }] })
  } catch (error) {
    next(error)
  }
}
