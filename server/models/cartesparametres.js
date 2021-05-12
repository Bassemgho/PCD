import mongoose from 'mongoose';

const carteparamsch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },
  equiv_mont_pts:String,
  bonparams:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"bonparam",
  }],
  reductionparams:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"reductionparam",
  }],

})
const carteparams = mongoose.model("carteparams",carteparamsch);
export default carteparams;
