import { ValidationError } from 'express-json-validator-middleware'

import { HTTPStatusCode } from '../utils/errors/httpStatusCode.js'

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(HTTPStatusCode.BadRequest).json({ errorMessage: 'Validation Failed', errors: err.validationErrors.body })
  }

  return res.status(HTTPStatusCode.InternalServerError).json({ errorMessage: err.message, errors: err })
}
export default errorHandler
