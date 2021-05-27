import admins from '../models/Admin.js'
import appuser from '../models/userApp.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import errorResponse from '../utils/ErrorResponse.js'
/*
export const signin = async (req,res) => {
  const {username,password} = req.body
  try {
    const existUser = await admins.findOne({username:username})
    if (!existUser) {
      return res.status(404).json({message:"admin not found"})
    }
    const passwordcorrect = await bcrypt.compare(password,existUser.password)
    if (!passwordcorrect) {
      return res.status(400).json({message:"invalid creds"})
    }
    else {
      const token = jwt.sign({username:existUser.username,id:existUser.id},'test' , {expiresIn:'1h'})
    }
  } catch (e) {

  }


  }
*/

  export const signup = async (req,res) => {
    try {
      const user = await admins.findOne({username:req.body.username})
      if (user) {
        return res.status(400).json({message:"admin in use"});
      }
      else {
        const usr = req.body
        const user = new admins(usr);
        await user.save()
        res.status(201).json({message:"done"})
      }
    } catch (e) {
      res.status(400).json({message:e.message})

    } finally {

    }
  }

/*
  export const  signup = async (req,res,next) => {

    const {username,password} = req.body
    try {
      const adm = await admins.create({username,password});
  
      sendtoken(adm,201,res)
    } catch (e) {
      next(e);
    }
  
  }
  */
  export const  signin = async (req,res,next) => {
    const {username,password} = req.body;
    if (!username|| !password) {
      return next(new errorResponse('please provide valide creds',400))
    }
    try {
      const user = await admins.findOne({ username }).select("+password")
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

  export const getclients = async (req,res,next) => {

    try {
      const clients = await appuser.find({})
      if (!clients) {
        return next(new errorResponse("pas de clients",404));
      }
      return res.status(201).json(clients)
    } catch (e) {
      next(e);
    }
  }
  

  const sendtoken = (user,code,res) => {
    const token = user.getsignedtoken();
    res.status(code).json({
      success:true,
      token:token
    })
  }