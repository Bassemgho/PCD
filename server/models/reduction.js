import mongoose from 'mongoose';

const redsch = mongoose.Schema({
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

const reduction = mongoose.model("reduction",bonsch);
export default reduction;