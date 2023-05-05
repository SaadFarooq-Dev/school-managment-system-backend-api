import express from 'express';
import { createCourse, deleteCourse, getAllCourses, getCourse, patchCourse } from '../../controllers/courses.js';
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js';

const courseRouter = express.Router();

courseRouter.use(authenticateJWT)

courseRouter
  .route('/')
  .post(createCourse)
  .get(getAllCourses)

courseRouter
  .route('/:id')
  .delete(deleteCourse)
  .get(getCourse)
  .patch(patchCourse)

export default courseRouter;
