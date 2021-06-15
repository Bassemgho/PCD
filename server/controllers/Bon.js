import bon from '../models/BonAchat.js'
import appuser from '../models/userApp.js'
import bonparams from '../models/bonparam.js'
import carteVirtuelle from '../models/carteVirtuelle.js'

export const acheterbon = async (req,res,next) => {
    const user = req.user;
    const {id_bon} = req.body;
    try {

        const bp = await bonparams.findOne({_id:id_bon});
        console.log(bp);
        //console.log(user._id);
        console.log(bp.id_entreprise);
        const carte = await carteVirtuelle.findOne({id_client:user._id,id_entreprise:bp.id_entreprise});
        console.log(carte);
        if(carte.solde>bp.pts){
            const achbon = await bon.create({valeur:bp.valeurbon,id_client:carte.id_client,id_entreprise:bp.id_entreprise})
            carte.solde = carte.solde - bp.pts;
            carte.save();
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
/*
export const getbonsclient = async (req,res,next) => {
    const user = req.user;
    const id_client= user._id;
    try {
        const bclient = await bon.find({id_client});
        console.log(bclient)
        if (!bclient) {
            return next(new errorResponse("pas de bons pour ce client",404));
        }
       return res.status(201).json(bclient)
        

    } catch (error) {
        next(error)
    }
}*/

export const getbonsclient = async (req,res,next) => {
    const caissier = req.caissier;
    const {id}= req.params;
    try {
        const bclient = await bon.find({id_client:id}).populate('id_entreprise').exec();
        console.log(bclient)
        if (!bclient) {
            return next(new errorResponse("pas de bons pour ce client",404));
        }
       return res.status(201).json({sucess:true,data:bclient})
        

    } catch (error) {
        next(error)
    }
}
export const removebonach = async (req,res,next) => {
    const caissier = req.caissier;
    const {_id} = req.body;
  try {
      const dcl = await bon.find({_id:_id})
      console.log(dcl)
    await bon.deleteOne({_id:_id})
    const bclient = await bon.find({id_client:dcl[0].id_client});
    res.status(201).json({sucess:true,data:bclient});
  } catch (error) {
    next(error);
  }
}