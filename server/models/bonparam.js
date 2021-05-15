import mongoose from 'mongoose';

const bonparmsch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  pts:Number,
  delai:Number,
  valeurbon:Number,
})

const bonparams = mongoose.model("bonparams",bonparmsch);
bonparams.createIndexes();

export default bonparams;