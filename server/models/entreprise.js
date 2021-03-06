import mongoose from 'mongoose';
import shop from './shop.js'
const entreprise_schema = mongoose.Schema({
  name:{
    type:'String',
    required:[true,'please provide a name'],
    unique: true
  },
  logo:{
    type:'String',
    required:[true,'please provide a logo'],
  },
  //name:String,
  //logo:String,
  montant:{
    type:'Number',
    default:"0"
  },
  equiv_mont_pts:{
    type:'Number',
    default:"0"
  }

})
entreprise_schema.pre('save',async function(next){
  if (this.isNew) {

    const sh =await shop.create({id_entreprise:this._id})
    next();
  }

})
const entreprise = mongoose.model('entreprise',entreprise_schema);
export default entreprise;

//zedt fiha montant
