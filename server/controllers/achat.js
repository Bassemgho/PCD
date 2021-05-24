import achat from '../models/ACHAT.js'
import carteVirtuelle from '../models/carteVirtuelle.js'
import entreprise from '../models/entreprise.js'
import appuser from '../models/userApp.js'

export const addachat = async (req,res,next) => {
  const {montant,id_client} = req.body;
  const caissier = req.caissier;
  console.log(caissier);
  try {
    if (!montant) {
      return res.status(400).json({sucess:false,message:"verifier le montant"})
    }

    const ach = await achat.create({montant,id_entreprise:caissier.id_entreprise,id_client})

    if (!ach) {
      console.log("dmthing went wrong");
    }
    // const client = await appuser.findOne({_id:id_client   })
    const carte = await carteVirtuelle.findOne({id_client:id_client,id_entreprise:caissier.id_entreprise}).populate('entreprise').exec();
    console.log(carte);
    if (montant>carte.id_entreprise.montant) {
      const q = MAth.floor(montant/(carte.id_entreprise.montant))

      carte.solde = carte.solde + q*carte.id_entreprise.equiv_mont_pts;
      carte.save()
      return res.status(201).json({sucess:true,message:`now you have ${carte.solde}`})
    }
    return res.status(201).json({sucess:true,message:"achat admise ,auccun point est rembourséé"})
    // return res.status(201).json({sucess:true,message:"operation successfull"})
  } catch (e) {
    next(e)
  }
}
