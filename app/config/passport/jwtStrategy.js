import passportJWT from 'passport-jwt'

import userModel from '../../models/User.js'

const ExtractJwt = passportJWT.ExtractJwt
const JWTstrategy = passportJWT.Strategy

export default new JWTstrategy(
  {
    secretOrKey: process.env.JWTSECRET,
    jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    passReqToCallback: true
  },
  async (req, token, done) => {
    try {
      const user = await userModel.findById(token.id).select('-password')
      if (user) {
        req.user = user
        return done(null, user)
      }
      return done(null, false, { message: 'Invalid user token' })
    } catch (err) {
      return done(err)
    }
  }
)
