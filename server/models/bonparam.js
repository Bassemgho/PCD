import mongoose from 'mongoose';

const bonparmsch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  pts:Number,
  delais:Number,
  valeurbon:Number,
})

const bonparms = mongoose.model("bonparams",bonparmsch);
export default bonparms;
