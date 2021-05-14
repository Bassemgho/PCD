import ptvente from '../models/ptvente.js'
export const addptvente = async (req,res,next) => {
  const {nom , horaire, lat,lang} = req.body;
  const user = req.user;
  try {
    const pt = await ptvente.create({nom,horaire,lat,lang,id_entreprise:user.id_entreprise})
    console.log("success");
     res.status(201).json({message:"succes"});
  } catch (e) {
    console.log('errror');
    next(e);
  }
}
