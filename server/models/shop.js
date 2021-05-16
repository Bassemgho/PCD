import mongoose from 'mongoose';

const shopparam = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
  },

  bonparams:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"bonparams",
  }],
  reductionparams:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"reductionparam",
  }],

})
shopparam.methods.newbon = function (id) {
  this.bonparams.push(id);
}
const shop = mongoose.model("shop",shopparam);
shop.createIndexes()
export default shop;
