import redparam from '../models/reductionparam.js'
import errorResponse from '../utils/ErrorResponse.js'

export const addredparam = async (req,res,next) => {
  const {ptsred,delaired,percent} = req.body;
  const user = req.user;
  if (!ptsred|| !delaired || !percent) {
    return next(new errorResponse("please fill the fields  ",400));
    }
    try {

      const param = await redparam.create({ptsred,delaired,percent,id_entreprise:user.id_entreprise})
      if (!param) {
        next( new errorResponse("smthing went wrong",400))
      }
      res.status(201).json({success:true,message:"opperation successfull"})
    } catch (e) {
      next(e)
    }
}