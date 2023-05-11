export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      next()
    }
    throw new Error({ message: "Invalid User", errors: [{ msg: 'Role must be an admin' }] })
  } catch (error) {
    next(error)
  }
}
