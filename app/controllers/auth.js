import jwt from 'jsonwebtoken';
import userModel from "../models/User.js";

export const registerUser = async (req, res, next) => {
  let { name, email, password,role, joinDate, semester } = req.body
  try {
    let user = await userModel.findOne({ email })
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }
    user = await userModel.create({ name, email, password, role, joinDate, semester});
    user = user.toObject();
    delete user.password;
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
};

export const loginUser = async (req, res, next)=>{

  try {
    jwt.sign(
      req.user,
      process.env.JWTSECRET,
      { expiresIn: 36000 },
      async (err, token) => {
       if (err) throw err;
       res.json({ token });
      }
     )

  } catch (error) {
    next(error)
  }
}
