import users from '../models/user.js'
import errorResponse from '../utils/ErrorResponse.js'
export const  signup = async (req,res,next) => {

  const {username,email,password} = req.body
  try {

    const user = await users.create({
      username,
      email,
      password,
    });
    sendtoken(user,201,res)
  } catch (e) {
    next(e);
  }

}
export const  signin = async (req,res,next) => {
  const {username,password} = req.body;
  if (!username|| !password) {
    return next(new errorResponse('please provide valide creds',400))
  }
  try {
    const user = await users.findOne({ username }).select("+password")
    if (!user) {
      return next(new errorResponse('please provide valide username',404))
    }
    const isMatch =  await user.matchPasswords(password)
    if (!isMatch) {
      return next(new errorResponse('please provide valide creds',401))
    }
    sendtoken(user,200,res);
  } catch (e) {
    next(e)
  }

}
export const  forgotpassword = (req,res,next) => {
  res.json({message: "forgot password route "})
}
export const  resetpassword = (req,res,next) => {
  res.json({message: "reset passwor route "})
}
const sendtoken = (user,code,res) => {
  const token = user.getsignedtoken();
  res.status(code).json({
    success:true,
    token:token
  })
}
