import mongoose from 'mongoose';

const eventsch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  nom:{
    type:'String',
    required:[true,'please enter value'],
  },
  lieu:{
    type:'String',
    required:[true,'please enter value'],
  },
  //nom:String,
  //lieu:String,
  jourdebut:String,
  moisdebut:String,
  andebut:String,
  jourfin:String,
  moisfin:String,
  anfin:String,
  heuredebut:String,
  mindebut:String,
  heurefin:String,
  minfin:String,
})

const events = mongoose.model("events",eventsch);
events.createIndexes();

export default events;
