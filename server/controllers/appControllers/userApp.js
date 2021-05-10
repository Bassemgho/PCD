import appuser from '../../models/userApp.js'
import errorResponse from '../../utils/ErrorResponse.js'
// import carte

export const viewcards = async (req,res,ne) => {
 const id = req.user._id;

 try {
   const user = await appuser.find({_id:id}).populate('cartes').exec();
   res.status(201).json({user});
 } catch (e) {
   next(e);

 }

}
export const signup = async (req,res,next) => {
  const {username,password,email,phonenumber} = req.body;
  try {
      const user = await appuser.create({username,password,email,phonenumber,isEmplyee:false})
      user.initializecards();
      sendtoken(user,201,res);
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
    const user = await appuser.findOne({ username }).select("+password")
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
const sendtoken = (user,code,res) => {
  const token = user.getsignedtoken();
  res.status(code).json({
    success:true,
    token:token
  })
}
