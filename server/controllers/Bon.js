import bon from '../models/BonAchat.js'
import appuser from '../models/userApp.js'
import bonparams from '../models/bonparam.js'
import carteVirtuelle from '../models/carteVirtuelle.js'

export const acheterbon = async (req,res,next) => {
    const user = req.user;

    try {

        const bp = await bonparams.findOne({_id:req._id});
        console.log(bp);
        const carte = await carteVirtuelle.findOne({id_client:user._id,id_entreprise:bp.id_entreprise});
        if(carte.solde>bp.pts){
            const achbon = await bon.create({Valeur:bp.valeurbon,id_client:carte.id_client,id_entreprise:bp.id_entreprise})
            carte.solde = carte.solde - bp.pts;
            console.log("bon acheté")
            return res.status(201).json({sucess:true,message:"operation successfull"})
        }
        else{
            console.log("solde insuffisant")
        }
    } catch (error) {
        next(error)
    }
}