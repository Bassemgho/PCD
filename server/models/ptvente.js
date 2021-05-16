import mongoose from 'mongoose'

const ptventeSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise',

  },
  nom:String,
  address:String,
  //horaire:String,
  lat:String,
  lang:String,
  heuredebut:String,
  mindebut:String,
  heurefin:String,
  minfin:String,
  jourdebut:String,
  jourfin:String

})

const ptvente = mongoose.model("ptvente",ptventeSch);
ptvente.createIndexes();
export default ptvente;