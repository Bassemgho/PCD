import users from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const signin = async (req,res) => {
  const {username,password} = req.body
  try {
    const existUser = await users.findOne({username:username})
    if (!existUser) {
      return res.status(404).json({message:"user not found"})
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
  export const signup = async (req,res) => {
    try {
      const user = await users.findOne({username:req.body.username})
      if (user) {
        return res.status(400).json({message:"username in use"});
      }
      else {
        const usr = req.body
        const user = new users(usr);
        await user.save()
        res.status(201).json({message:"done"})
      }
    } catch (e) {
      res.status(400).json({message:e.message})

    } finally {

    }
  }
