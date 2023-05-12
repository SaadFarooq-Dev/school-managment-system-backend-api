import passport from 'passport'

import jwtStrategy from './passport/jwtStrategy.js'
import { localStrategyLogin } from './passport/localStrategy.js'

passport.use('login', localStrategyLogin)
passport.use(jwtStrategy)

export default passport
