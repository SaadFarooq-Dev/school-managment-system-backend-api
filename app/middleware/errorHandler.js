import { HTTPStatusCode } from "../utils/errors/httpStatusCode.js";

const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(HTTPStatusCode.InternalServerError).json({errorMessage:err.message, errors: err})
};
export default errorHandler;
