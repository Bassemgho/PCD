import mongoose from 'mongoose';

const achatsch = mongoose.Schema({
  id_client:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'appuser'
  },
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise'
  },
  montant:{
    type:'Number',
    required:[true,"please provide a valid amount of money"]
  },
  date:Date,
  id_ptvente:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ptvente",
  },
  ptsadmises:Number,
})

const achat = mongoose.model("achat",achatsch)
export default achat;