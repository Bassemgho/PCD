import mongoose from 'mongoose';

const caissierSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
    required:[true,'problem getting your entreprise id'],

  },
  name:String,
  id_user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appuser'
  },
  id_ptvente:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ptvente",
  }
})



const caissier = mongoose.model('caissier',caissierSch);
export default caissier;


/*
const caissierSch = mongoose.Schema({
  id_entreprise:{
    type:String,
    required:[true,'problem getting your entreprise id'],

  },
  name:String,
  id_user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appuser'
  },
})



const caissier = mongoose.model('caissier',caissierSch);
export default caissier;
*/