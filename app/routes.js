import { Router } from 'express';
import authRouter from './routes/api/auth.js';
import classRouter from './routes/api/class.js';

const router = Router()

router.use('/auth',authRouter)
router.use('/class',classRouter)

export default router
