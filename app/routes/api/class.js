import express from 'express';
import passport from 'passport';
import { createClass, deleteClass, getAllClasses, getClass,patchClass } from '../../controllers/class.js';

const classRouter = express.Router();

classRouter
  .route('/')
  .post(passport.authenticate('jwt',{session: false, failureMessage: true}),createClass)
  .get(passport.authenticate('jwt',{session: false, failureMessage: true}),getAllClasses)

classRouter
  .route('/:id')
  .delete(passport.authenticate('jwt',{session:false, failureMessage: true}),deleteClass)
  .get(passport.authenticate('jwt',{session:false, failureMessage: true}),getClass)
  .patch(passport.authenticate('jwt',{session:false, failureMessage: true}),patchClass)


export default classRouter;
