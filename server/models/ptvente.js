import mongoose from 'mongoose'

const ptventeSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise',

  },
  nom:String,
  horaire:String,
  lat:String,
  lang:String,
})

const ptvente = mongoose.model("ptvente",ptventeSch);
ptvente.createIndexes();
export default ptvente;
