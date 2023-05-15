import { Router } from 'express'

import authRouter from './routes/api/auth.js'
import classRouter from './routes/api/class.js'
import courseRouter from './routes/api/course.js'
import courseInstructorRouter from './routes/api/courseInstructor.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/class', classRouter)
router.use('/course', courseRouter)
router.use('/courseinstructor', courseInstructorRouter)

router.get('/', (req, res) => { res.status(200).send('Api Running') })

export default router
