import events from '../models/event.js'

export const addevent = async (req,res,next) => {
  const {nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,andfin, heuredebut,mindebut,heurefin,minfin} = req.body;
  const user = req.user;
  try {
    const pt = await events.create({nom , lieu , jourdebut, moisdebut,andebut,jourfin, moisfin,andfin, heuredebut,mindebut,heurefin,minfin,id_entreprise:user.id_entreprise})
    console.log("success");
     res.status(201).json({message:"succes"});
  } catch (e) {
    console.log('errror');
    next(e);
  }
}