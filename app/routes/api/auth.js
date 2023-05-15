import express from 'express'
import passport from 'passport'

import { loginUser, registerUser } from '../../controllers/auth.js'
import { isAdmin } from '../../helpers/hepler.js'
import { authenticateJWT } from '../../middleware/jwtAuthenticate.js'
import validate from '../../middleware/validation.js'
import { getUserSchema } from '../../schemaValidator/userSchema.js'

const authRouter = express.Router()

authRouter.use('/signup', authenticateJWT, isAdmin, validate({ body: getUserSchema(true) }), registerUser)
authRouter.use('/login', passport.authenticate('login', { session: false, failWithError: true }), loginUser)

export default authRouter
