import express from 'express';
import passport from 'passport';
import { createClass } from '../../controllers/class.js';

const classRouter = express.Router();

classRouter
  .route('/')
  .post(passport.authenticate('jwt',{session: false, failureMessage: true}),createClass)

export default classRouter;
