import mongoose from 'mongoose';

const redparamsh = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  ptsred:Number,
  delaired:Number,
  percent:Number,
})

const redparam = mongoose.model("reductionparam",redparamsh);
export default redparam;