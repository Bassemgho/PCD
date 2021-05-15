import bonparams from '../models/bonparam.js';
import errorResponse from '../utils/ErrorResponse.js'

export const addbonparam = async (req,res,next) => {
  const {pts,delai,valeurbon} = req.body
  const user = req.user
  if (!pts|| !delai || !valeurbon) {
    return next(new errorResponse("please fill the fields  ",400));
    }
    try {

      const param = await bonparams.create({pts,delai,valeurbon,id_entreprise:user.id_entreprise})
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
    const listparams = await bonparams.find({id_entreprise:user.id_entreprise})
    if (!listparams) {
      return res.status(201).json({sucess:false,message:"pas des parametre pour le moment"})
    }
    return res.status(201).json({sucess:true,listparams})

  } catch (e) {
    next(e)
  }
}
