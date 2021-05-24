import mongoose from 'mongoose'

const ptventeSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise',

  },
  nom:{
    type:'String',
    required:[true,'please enter value'],
  },
  address:{
    type:'String',
    required:[true,'please enter value'],
  },
  lat:{
    type:'String',
    required:[true,'please enter value'],
  },
  lang:{
    type:'String',
    required:[true,'please enter value'],
  },
 /* heuredebut:{
    type:'String',
    required:[true,'please enter value'],
  },
  mindebut:{
    type:'String',
    required:[true,'please enter value'],
  },
  heurefin:{
    type:'String',
    required:[true,'please enter value'],
  },
  minfin:{
    type:'String',
    required:[true,'please enter value'],
  },
  jourdebut:{
    type:'String',
    required:[true,'please enter value'],
  },
  jourfin:{
    type:'String',
    required:[true,'please enter value'],
  }*/
  //nom:String,
  //address:String,
  //horaire:String,
  //lat:String,
  //lang:String,
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