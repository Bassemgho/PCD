import mongoose from 'mongoose';
import shop from './shop.js'
const entreprise_schema = mongoose.Schema({
  name:String,
  logo:String,
  equiv_mont_pts:String,

})
entreprise_schema.pre('save',async function(next){
    const sh =await shop.create({id_entreprise:this._id})
    next();

})
const entreprise = mongoose.model('entreprise',entreprise_schema);
export default entreprise;
