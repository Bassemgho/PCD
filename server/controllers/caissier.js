import caissier from '../models/caissier.js';
import appuser from '../models/userApp.js'

export const addCaissier = async (req,res,next) => {
  const {name,username,password,email} = req.body;
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
      id_entreprise:user.id_entreprise,
      id_user:usr._id

    })
    res.status(201).json({message:"success",id:caiss._id})
  } catch (e) {
    next(e)
  }
}
export const removeCaiiser = (req,res,next) => {
  const {id} = req.body
  try {

  } catch (e) {
    next(e)
  }
}