import { HTTPStatusCode } from "../utils/errors/httpStatusCode.js";

const errorHandler = (err, req, res, next) => {
  return res.status(HTTPStatusCode.InternalServerError).json({message:"Something went wrong",errors: err})
};
export default errorHandler;
