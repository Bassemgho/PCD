import events from '../models/event.js'
import errorResponse from '../utils/ErrorResponse.js';


export const addevent = async (req,res,next) => {
  const {nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,anfin, heuredebut,mindebut,heurefin,minfin} = req.body;
  const user = req.user;
  try {
    const pt = await events.create({nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,anfin, heuredebut,mindebut,heurefin,minfin,id_entreprise:user.id_entreprise})
    console.log("success");
     res.status(201).json({message:"succes"});
  } catch (e) {
    console.log('errror');
    next(e);
  }
}


export const getevent = async (req,res,next) => {
  const user = req.user;
  const id_entreprise = user.id_entreprise;
  try {
      const ev = await events.find({id_entreprise });

      if (!ev) {
          return next(new errorResponse("pas d'evenements'",404));
      }
       return res.status(201).json(ev)

  } catch (error) {
      next(e);
  }

}

export const delevent = async (req,res,next) => {
  const user = req.user;
  
  const {id_ev} = req.body;
  try {
    await events.deleteOne({_id:id_ev});
    res.status(201).json({sucess:true,message:"operation success"});
  } catch (error) {
    next(error);
  }
}
