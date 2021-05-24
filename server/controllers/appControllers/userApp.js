import appuser from '../../models/userApp.js'
import errorResponse from '../../utils/ErrorResponse.js'
import carteVirtuelle from '../../models/carteVirtuelle.js'
import caissier from '../../models/caissier.js'
import entreprise from '../../models/entreprise.js'
// import userApp from '../../models/userApp.js'

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
      initializecards(user);
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
export const signincaissier = async (req,res,next) => {
  const {username,password} = req.body;
  if (!username|| !password) {
    return next(new errorResponse('please provide valide creds',400))
  }
  try {
    const cais = await caissier.findOne({ username }).select("+password")
    if (!cais) {
      return next(new errorResponse('please provide valide username',404))
    }
    const isMatch =  await cais.matchPasswords(password)
    if (!isMatch) {
      return next(new errorResponse('please provide valide creds',401))
    }
    sendtoken(cais,200,res);
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

//

export const getclient = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
      const cart = await carteVirtuelle.find({id_entreprise }).populate('id_client').exec();
      console.log(cart);

      //const id = cart.id_client;
      //const client = await appuser.find({id_client : id})

      //if (!client) {
        //  return next(new errorResponse("pas de clients",404));
      //}
       return res.status(201).json(cart)

  } catch (error) {
      next(error);
  }

}
const initializecards = async (user) => {
  const data = await entreprise.find({},'_id').exec();
  try {
    let list= [];
    Object.values(data).map( async (item) => {
      const carte = await carteVirtuelle.create({id_entreprise:item,id_client:user._id});
      list.push(carte._id)
      await appuser.update({_id:user._id},{$push:{cartes:carte._id}})
      console.log(list);
      user.cartes = list;

  })
  // user.cartes = ["heeloo"]
  // user.save();
//   user.cartes = list;
  // await appuser.update({_id:user.id_client},{$push:{cartes:carte._id}})
//
//
//   console.log(user.cartes);
//   user.save();
}
catch (e) {
    console.log(e.message);

  }

}
