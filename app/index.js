/* eslint-disable no-unused-vars */
import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import connectDB from './config/db.js'
import _initializePassport from './config/passport.js'
import errorHandler from './middleware/errorHandler.js'
import router from './routes.js'

connectDB()

const app = express()

app.use(cors('*'))
app.use(morgan('tiny'))
app.use(express.json({ extended: false }))

app.use('/', router)

app.use(errorHandler)

export default app
