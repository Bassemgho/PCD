import users from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import errorResponse from '../utils/ErrorResponse.js'


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
////////// lezem nzid nchoufha khater haka yarj3ou lkol vide ken manekteb chay

  export const updateEntreprise = async (req,res,next) => {
    const user = req.user;
    const id_entreprise = user.id_entreprise;
    const {newusername,newemail,newpassword} = req.body;

    try {
      const up = await users.find({id_entreprise });



      if (!up) {
        return next(new errorResponse("entreprise n'existe pas",404));
      }else {
        //if username == null
        //users.updateOne(username)
        if (newusername) {
        users.updateOne({username:user.username},{username : newusername},function (err,res) {
          if (err) {
            console.log("error"+err);
          }else {
            console.log("result"+res);
          }
        })
        // const ch
        res.status(201).json({success:true,message:"operation successfull"})

        }
        if (newemail) {

        users.updateOne({email:user.email},{email : newemail},function (err,res) {
          if (err) {
            console.log("error"+err);
          }else {
            console.log("result"+res);
          }
        })
        res.status(201).json({success:true,message:"operation successfull"})

      }
      if (newpassword) {
        try {
          if (newpassword.length) {

          user.password = newpassword;
          user.save();
          res.status(201).json({success:true,message:"operation successfull"})
        }
        } catch (e) {
          next(e)
        }
        // users.updateOne({password:user.password},{password : newpassword},function (err,res) {
        //   if (err) {
        //     console.log("error"+err);
        //   }else {
        //     console.log("result"+res);
        //   }
        // })
      }
      }

    } catch (error) {
      next(error);
    }
  }
