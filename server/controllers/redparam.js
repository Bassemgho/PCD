import redparams from '../models/reductionparam.js';
import errorResponse from '../utils/ErrorResponse.js'

export const addredparam = async (req,res,next) => {
  const {pts,delai,pourcentagered} = req.body
  const user = req.user
  if (!pts|| !delai || !pourcentagered) {
    return next(new errorResponse("please fill the fields  ",400));
    }
    try {

      const param = await redparams.create({pts,delai,pourcentagered,id_entreprise:user.id_entreprise})
      if (!param) {
        next( new errorResponse("smthing went wrong with database",400))
      }
      res.status(201).json({success:true,message:"opperation successfull"})
    } catch (e) {
      next(e)
    }
}
export const getbonparams = async (req,res,next) => {
  const user = req.user;
  try {
    const listparams = await redparams.find({id_entreprise:user.id_entreprise})
    if (!listparams) {
      return res.status(201).json({sucess:false,message:"pas des parametre pour le moment"})
    }
    return res.status(201).json({sucess:true,listparams})

  } catch (e) {
    next(e)
  }
}
