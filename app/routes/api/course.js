import express from 'express'

import { createCourse, deleteCourse, getAllCourses, getCourse, patchCourse } from '../../controllers/courses.js'
import { isAdmin } from '../../helpers/hepler.js'
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js'
import validate from '../../middleware/validation.js'
import { courseSchema } from '../../schemaValidator/courseSchema.js'

const courseRouter = express.Router()

courseRouter.use(authenticateJWT)

courseRouter
  .route('/')
  .post(isAdmin, validate({ body: courseSchema }), createCourse)
  .get(getAllCourses)

courseRouter
  .route('/:id')
  .delete(isAdmin, deleteCourse)
  .get(getCourse)
  .patch(isAdmin, validate({ body: courseSchema }), patchCourse)

export default courseRouter
