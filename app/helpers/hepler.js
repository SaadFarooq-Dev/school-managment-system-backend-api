import { roles } from "../constants/enum.js";
import { HTTPStatusCode } from "../utils/errors/httpStatusCode.js";

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
