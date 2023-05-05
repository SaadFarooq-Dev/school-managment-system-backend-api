import express from 'express';
import { createClass, deleteClass, getAllClasses, getClass, patchClass } from '../../controllers/class.js';
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js';

const classRouter = express.Router();

classRouter.use(authenticateJWT)

classRouter
  .route('/')
  .post(createClass)
  .get(getAllClasses)

classRouter
  .route('/:id')
  .delete(deleteClass)
  .get(getClass)
  .patch(patchClass)


export default classRouter;
