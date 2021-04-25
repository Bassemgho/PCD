import entreprise from '../models/entreprise.js'
import errorResponse from '../utils/ErrorResponse.js'

export const createentreprise = async (req,res,next) => {
  const {name,logo} = req.body;
  try {
    const ent = await entreprise.create({name,logo});
    return res.status(201).json({message:"done"});
  } catch (e) {
    console.log("smthing whron");
  }
}
