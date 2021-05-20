import caissier from '../models/caissier.js';
import appuser from '../models/userApp.js';
import errorResponse from '../utils/ErrorResponse.js';



//hedhy tekhdem ki entreprise bch tzid caissier mayhemhech fih client wala le

export const addCaissier = async (req,res,next) => {
  const {name,nomentreprise,nomptvente} = req.body;
  const user = req.user;
  try {
    const caiss = await caissier.create({
      name,
      nomentreprise,
      nomptvente,
      id_entreprise:user.id_entreprise,

    })
    res.status(201).json({message:"success",id:caiss._id})
  } catch (e) {
    next(e)
  }
}


export const getcaissier = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
      const caiss = await caissier.find({id_entreprise });

      if (!caiss) {
          return next(new errorResponse("pas de caissiers",404));
      }
       return res.status(201).json(caiss)

  } catch (error) {
      next(e);
  }

}

///moush wadhha

/*
export const addCaissier = async (req,res,next) => {
  const {name,nomentreprise,nomptvente,username,password,email} = req.body;
  const user = req.user;
  try {
    const usr = await appuser.create({
      username,
      password,
      email,
      isEmplyee:true
    })
    const caiss = await caissier.create({
      name,
      nomentreprise,
      nomptvente,
      id_entreprise:user.id_entreprise,
      id_user:usr._id

    })
    res.status(201).json({message:"success",id:caiss._id})
  } catch (e) {
    next(e)
  }
}*/

export const removeCaiiser = (req,res,next) => {
  const {id} = req.body
  try {

  } catch (e) {
    next(e)
  }
}