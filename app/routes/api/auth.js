import express from 'express';
import passport from 'passport';
import { loginUser, registerUser } from "../../controllers/auth.js";


const authRouter = express.Router();

authRouter.use('/signup', registerUser);
authRouter.use('/login', passport.authenticate('login',{ session: false, failWithError: true }), loginUser)

export default authRouter;
