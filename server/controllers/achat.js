import achat from '../models/ACHAT.js'

export const addachat = async (req,res,next) => {
  const {montant} = req.body;
  const user = req.user;
  try {
    const ach = await achat.create({montant,id_entreprise:user.id_entreprise,id_client:user._id})
    if (!ach) {
      console.log("dmthing went wrong");
    }
    return res.status(201).json({sucess:true,message:"operation successfull"})
  } catch (e) {
    next(e)
  }
}
