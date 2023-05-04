import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config';

import _initializePassport from './config/passport.js';

import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import authRouter from './routes/auth.js';

connectDB();

const app = express();

app.use(cors('*'))
app.use(morgan('tiny'));
app.use(express.json({ extended: false }))

app.use('/auth', authRouter);

app.get('/', (req, res, next) => {
  try {
    res.json('api running')
  } catch (error) {
    next(error)
  }
})

app.use(errorHandler);

export default app;
