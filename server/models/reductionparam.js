import mongoose from 'mongoose';

import shop from './shop.js'
const redparamsh = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
    select:false
  },
  ptsred:String,
  delaired:String,
  percent:String,
})
redparamsh.pre('save',async function (next) {
  let sh = await shop.findOne({id_entreprise:this.id_entreprise})
  if (!sh) {
    sh = await  shop.create({id_entreprise:this.id_entreprise,reductionparams:[this._id]})
    next();
    return ;
  }
  // await shop.deleteOne({_id:sh._id},function (err) {
  //   console.log("error in deleteing");
  // })
  const list = sh.reductionparams;
  list.push(this._id)
  // const newone = await shop.create({_id:sh._id,bonparams:sh.bonparams,reductionparams:list})
  shop.updateOne({id_entreprise:this.id_entreprise},{reductionparams:list},function (err,res) {
    if (err) {
      console.log("error"+err);
    }else {
      console.log("result"+res);
    }
  })
  next();

})


const redparam = mongoose.model("reductionparam",redparamsh);
redparam.createIndexes()

export default redparam;
