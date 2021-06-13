import achat from '../models/ACHAT.js'
import carteVirtuelle from '../models/carteVirtuelle.js'
import entreprise from '../models/entreprise.js'
import appuser from '../models/userApp.js'
import stats from '../models/stats.js'

export const addachat = async (req,res,next) => {
  const {montant,id_client} = req.body;
  const caissier = req.caissier;
  // console.log(caissier);
  try {
    if (!montant) {
      return res.status(400).json({sucess:false,message:"verifier le montant"})
    }

    const ach = await achat.create({montant,id_entreprise:caissier.id_entreprise,id_client,id_ptvente:caissier.id_ptvente})

    if (!ach) {
      console.log("dmthing went wrong");
    }
    // const client = await appuser.findOne({_id:id_client   })
    const carte = await carteVirtuelle.findOne({id_client:id_client,id_entreprise:caissier.id_entreprise}).populate('id_entreprise').exec();
    console.log(carte);
    if (montant>caissier.id_entreprise.montant) {
      const q = Math.floor(montant/(carte.id_entreprise.montant))

      carte.solde = carte.solde + q*carte.id_entreprise.equiv_mont_pts;
      carte.save()
      updateData(ach,caissier);
      return res.status(201).json({sucess:true,message:`now you have ${carte.solde}`})
    }
    return res.status(201).json({sucess:true,message:"achat admise ,auccun point est rembourséé"})
    // return res.status(201).json({sucess:true,message:"operation successfull"})
  } catch (e) {
    next(e)
  }
}
const updateData =  async (achat,cais) => {
//   try {
//
//     const month = achat.createdAt
//     // console.log(achat.date.toString().split(" ")[1]);
//     console.log(cais);
//   } catch (e) {
//     console.log(e.message);
// }

  try {
    const month = achat.date.toString().split(" ")[1]
    const st = await stats.findOne({id_entreprise:achat.id_entreprise,month,id_ptvente:cais.id_ptvente})
    if (!st) {
      const st1 = await stats.create({id_entreprise:achat.id_entreprise,id_ptvente:cais.id_ptvente,month})
      st1.valeurC = st1.valeurC + achat.montant;
      console.log(cais);
      st1.save();
      return ;
    }
    st.valeurC = st.valeurC + achat.montant;
    st.save();
    console.log(st);


  } catch (e) {
  console.log(e.message);
  } finally {

  }
}
