import bonparams from '../models/bonparam.js';
import shop from '../models/shop.js';
import errorResponse from '../utils/ErrorResponse.js'

export const addbonparam = async (req,res,next) => {
  const {pts,delai,valeurbon} = req.body;
  const user = req.user;
  if (!pts|| !delai || !valeurbon) {
    return next(new errorResponse("please fill the fields  ",400));
    }
    try {

      const param = await bonparams.create({pts,delai,valeurbon,id_entreprise:user.id_entreprise})
      // const shh = await shop.find({id_entreprise})
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
  const id_entreprise = user.id_entreprise;
  try {
    const listparams = await bonparams.find({id_entreprise});

    if (!listparams) {
      return next(new errorResponse("pas de parametres de bon",404));
    }
    return res.status(201).json(listparams)

  } catch (error) {
    next(e);
  }
}
// delete
export const deletebon = async (req,res,next) => {
  const user = req.user;
  
  const {id_bon} = req.body;
  try {
    await bonparams.deleteOne({_id:id_bon});
    res.status(201).json({sucess:true,message:"operation success"});
  } catch (error) {
    next(error);
  }
}
/*
export const getbonparams = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
    const listparams = await bonparams.find({id_entreprise});

    if (!listparams) {
      return res.status(201).json({sucess:false,message:"pas des parametre pour le moment"})
    }
    return res.status(201).json({sucess:true,listparams})

  } catch (e) {
    next(e)
  }
}
*/