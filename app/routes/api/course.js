import express from 'express'

import { createCourse, deleteCourse, getAllCourses, getCourse, patchCourse } from '../../controllers/courses.js'
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js'
import validate from '../../middleware/validation.js'
import { courseSchema } from '../../schemaValidator/courseSchema.js'

const courseRouter = express.Router()

courseRouter.use(authenticateJWT)

courseRouter
  .route('/')
  .post(validate({ body: courseSchema }), createCourse)
  .get(getAllCourses)

courseRouter
  .route('/:id')
  .delete(deleteCourse)
  .get(getCourse)
  .patch(validate({ body: courseSchema }), patchCourse)

export default courseRouter
