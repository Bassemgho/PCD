import users from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import entreprise from '../models/entreprise.js'
import errorResponse from '../utils/ErrorResponse.js'
import stats from '../models/stats.js'


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
        //
        if (newusername) {
          try {
            user.username = newusername;
            user.save();
            res.status(201).json({success:true,message:"username updated"})
          } catch (e) {
            next(e)
          }
            
          }
          if (newemail) {
            
            try {
              user.email = newemail;
              user.save();
              res.status(201).json({success:true,message:"email updated"})
            } catch (e) {
              next(e)
            }            
        }

        if (newpassword) {
          try {
            user.password = newpassword;
            user.save();
            res.status(201).json({success:true,message:"password updated"})
          } catch (e) {
            next(e)
          }
        }
        
        //
        /*
        users.updateOne({username:user.username},{username : newusername},function (err,res) {
          if (err) {
            console.log("error"+err);
          }else {
            console.log("result"+res);
          }
        })
        users.updateOne({email:user.email},{email : newemail},function (err,res) {
          if (err) {
            console.log("error"+err);
          }else {
            console.log("result"+res);
          }
        })
        users.updateOne({password:user.password},{password : newpassword},function (err,res) {
          if (err) {
            console.log("error"+err);
          }else {
            console.log("result"+res);
          }
        })*/
      }
      
    } catch (error) {
      next(error);
    }
  }

/////
export const getnom = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
      const ent = await (await users.findOne({id_entreprise }).populate('id_entreprise')).execPopulate();
      console.log(ent.id_entreprise.name);

       return res.status(201).json({name:ent.id_entreprise.name});

  } catch (error) {
      next(error);
  }

}


///staat
/*
export const getstat = async (req,res,next) => {
  const user =req.user;
  const id_entreprise = user.id_entreprise;
  try {
    const pt = await stats.find({id_entreprise}).populate('id_client').exec();
    
  } catch (error) {
    
  }
}*/