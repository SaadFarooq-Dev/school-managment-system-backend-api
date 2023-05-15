import { roles } from '../constants/enum.js'
import { HTTPStatusCode } from '../utils/errors/httpStatusCode.js'

export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role === roles.admin) {
      return next()
    }
    return res.status(HTTPStatusCode.Unauthorized).json({ errors: [{ message: 'Invalid Autorization for user role' }] })
  } catch (error) {
    next(error)
  }
}

export const isTeacher = (req, res, next) => {
  try {
    if (req.user.role === roles.teacher) {
      return next()
    }
    return res.status(HTTPStatusCode.Unauthorized).json({ errors: [{ message: 'Invalid Autorization for user role' }] })
  } catch (error) {
    next(error)
  }
}

export const isStudent = (req, res, next) => {
  try {
    if (req.user.role === roles.student) {
      return next()
    }
    return res.status(HTTPStatusCode.Unauthorized).json({ errors: [{ message: 'Invalid Autorization for user role' }] })
  } catch (error) {
    next(error)
  }
}

export const isAdminTeacher = (req, res, next) => {
  try {
    if (req.user.role === roles.admin || req.user.role === roles.teacher) {
      return next()
    }
    return res.status(HTTPStatusCode.Unauthorized).json({ errors: [{ message: 'Invalid Autorization for user role' }] })
  } catch (error) {
    next(error)
  }
}
