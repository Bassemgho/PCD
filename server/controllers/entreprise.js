import entreprise from '../models/entreprise.js'
import errorResponse from '../utils/ErrorResponse.js'


export const changemontant = async (req,res,next) => {
  const user = req.user ;
  const {newmontant,newequiv_mont_pts} = req.body;
  try {
    const ent = await entreprise.findOne({_id:user.id_entreprise});
    ent.montant = newmontant;
    ent.equiv_mont_pts = newequiv_mont_pts;
    ent.save();
    res.status(201).json({success:true,message:"operation success"+ent._id})
  } catch (e) {
    next(e)
  }

}
export const createentreprise = async (req,res,next) => {
  const {name,logo} = req.body;
  try {
    const ent = await entreprise.create({name,logo});
    return res.status(201).json({message:"done"});
  } catch (e) {
    console.log("smthing whron");
  }
}



/*
export const ajoutermagasin = async () => {

}
export const createentreprise = async (req,res) => {
  const {name,logo} = req.body;
  const ent = new entreprise ({name,logo})
  try {
    await ent.save();
    return res.status(201).json({message:"done"});
  } catch (e) {
    console.log("smthing whron");
  }
}*/

//sawsen
