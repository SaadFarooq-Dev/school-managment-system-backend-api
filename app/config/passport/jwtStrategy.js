import passportJWT from 'passport-jwt'
const ExtractJwt = passportJWT.ExtractJwt
const JWTstrategy = passportJWT.Strategy


export default new JWTstrategy(
    {
        secretOrKey: process.env.JWTSECRET,
        jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    },
    async (token, done) => {
        try {
            return done(null, token)
        }
        catch (err) {
            done(err);
        }
    }
)
