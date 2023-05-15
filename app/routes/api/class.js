import express from 'express'

import { createClass, deleteClass, getAllClasses, getClass, patchClass } from '../../controllers/class.js'
import { isAdmin } from '../../helpers/hepler.js'
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js'
import validate from '../../middleware/validation.js'
import { getClassSchema } from '../../schemaValidator/classSchema.js'

const classRouter = express.Router()

classRouter.use(authenticateJWT)

classRouter
  .route('/')
  .post(isAdmin, validate({ body: getClassSchema(true) }), createClass)
  .get(getAllClasses)

classRouter
  .route('/:id')
  .delete(isAdmin, deleteClass)
  .get(getClass)
  .patch(isAdmin, validate({ body: getClassSchema(false) }), patchClass)

export default classRouter
