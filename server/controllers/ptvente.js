import ptvente from '../models/ptvente.js'


export const addptvente = async (req,res,next) => {
  const {nom , address , lat, lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin} = req.body;
  const user = req.user;
  try {
    const pt = await ptvente.create({nom,address,lat,lang,heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin,id_entreprise:user.id_entreprise})
    console.log("success");
     res.status(201).json({message:"succes"});
  } catch (e) {
    console.log('errror');
    next(e);
  }
}
export const deleteptvente = async (req,res,next) => {
  const user = req.user;

  const {id_ptvent} = req.body
  try {
    await ptvente.deleteOne({_id:id_ptvent})
    res.status(201).json({sucess:true,message:"operation success"})
  } catch (e) {
    next(e)
  }
}

/*
export const addptvente = async (req,res,next) => {
  const {nom , horaire, address} = req.body;
  const user = req.user;
  try {
    const pt = await ptvente.create({nom,horaire,address,id_entreprise:user.id_entreprise})
    console.log("success");
     res.status(201).json({message:"succes"});
  } catch (e) {
    console.log('errror');
    next(e);
  }
}*/
