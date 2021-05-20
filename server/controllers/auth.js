import users from '../models/user.js'
import entreprise from '../models/entreprise.js'
import errorResponse from '../utils/ErrorResponse.js'
export const  signup = async (req,res,next) => {

  const {logo , name ,username,email,password} = req.body
  try {
    const ent = await entreprise.create({name,logo});

    const user = await users.create({id_entreprise:ent._id,
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

// paramcarte
// ça marche pas bel shyh
// à revoir 

export const addparam = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  const {newmontant,newequiv_mont_pts} = req.body;
  try {
    const up = await entreprise.find({id_entreprise });

    if (!up) {
      return next(new errorResponse("entreprise n'existe pas",404));
    }else {
      
      entreprise.updateOne({montant : user.id_entreprise.montant},{montant: newmontant},function (err,res) {
        if (err) {
          console.log("error"+err);
        }else {
          console.log("result"+res);
        }
      })
      entreprise.updateOne({equiv_mont_pts: user.id_entreprise.equiv_mont_pts },{equiv_mont_pts : newequiv_mont_pts},function (err,res) {
        if (err) {
          console.log("error"+err);
        }else {
          console.log("result"+res);
        }
      })
     
    }
  } catch (error) {
    next(error);
  }
}