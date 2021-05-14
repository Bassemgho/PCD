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
        next( new errorResponse("smthing went wrong",400))
      }
      res.status(201).json({success:true,message:"opperation successfull"})
    } catch (e) {
      next(e)
    }
}
