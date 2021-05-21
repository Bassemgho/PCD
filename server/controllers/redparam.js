import reductionparam from '../models/reductionparam.js'

import errorResponse from '../utils/ErrorResponse.js'

export const addredparam = async (req,res,next) => {
  const {ptsred,delaired,percent} = req.body;
  const user = req.user;
  if (!ptsred|| !delaired || !percent) {
    return next(new errorResponse("please fill the fields  ",400));
    }
    try {

      const param = await reductionparam.create({ptsred,delaired,percent,id_entreprise:user.id_entreprise})
      if (!param) {
        next( new errorResponse("smthing went wrong",400))
      }
      res.status(201).json({success:true,message:"opperation successfull"})
    } catch (e) {
      next(e)
    }
}

export const getredparams = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
    const listparams = await reductionparam.find({id_entreprise})
    
    if (!listparams) {
      return next(new errorResponse("pas de parametres de bon",404));
    }
    return res.status(201).json(listparams)

  } catch (error) {
    next(error);
  }
}

/*
export const getredparams = async (req,res,next) => {
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
}*/
