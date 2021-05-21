import mongoose from 'mongoose';
import shop from './shop.js'
const bonparmsch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
    select:false
  },
  pts:Number,
  delai:Number,
  valeurbon:Number,
})
bonparmsch.pre('save',async function (next) {
  let sh = await shop.findOne({id_entreprise:this.id_entreprise})
  if (!sh) {
    sh = await  shop.create({id_entreprise:this.id_entreprise,bonparams:[this._id]})
    next();
    return ;
  }
  // await shop.deleteOne({_id:sh._id},function (err) {
  //   console.log("error in deleteing");
  // })
  const list = sh.bonparams;
  list.push(this._id)
  // const newone = await shop.create({_id:sh._id,reductionparams:sh.reductionparams,bonparams:list})
  shop.updateOne({id_entreprise:this.id_entreprise},{bonparams:list},function (err,res) {
    if (err) {
      console.log("error"+err);
    }else {
      console.log("result"+res);
    }
  })
  next();

})
const bonparams = mongoose.model("bonparams",bonparmsch);
bonparams.createIndexes();

export default bonparams;
