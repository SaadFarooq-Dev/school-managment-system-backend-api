import passport from "passport";

import { localStrategyLogin } from "./passport/localStrategy.js";
import jwtStrategy from "./passport/jwtStrategy.js";

passport.use('login', localStrategyLogin);
passport.use(jwtStrategy);

export default passport
