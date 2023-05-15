import express from 'express'

import { createCourseInstructor, deleteCourseInstructor, getAllcourseInstructors, getCourseInstructor, patchcourseInstructor } from '../../controllers/courseInstructors.js'
import { isAdmin } from '../../helpers/hepler.js'
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js'

const courseInstructorRouter = express.Router()

courseInstructorRouter.use(authenticateJWT)

courseInstructorRouter
  .route('/')
  .post(isAdmin, createCourseInstructor)
  .get(getAllcourseInstructors)

courseInstructorRouter
  .route('/:id')
  .delete(isAdmin, deleteCourseInstructor)
  .get(getCourseInstructor)
  .patch(isAdmin, patchcourseInstructor)

export default courseInstructorRouter
