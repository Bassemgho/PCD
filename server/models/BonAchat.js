import mongoose from 'mongoose';

const bonsch = mongoose.Schema({
  valeur:Number,
  id_client:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"appuser",
  },
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  dateachat:Date,
  dateexpiration:Date,



})

const bon = mongoose.model("bon",bonsch);
export default bon;