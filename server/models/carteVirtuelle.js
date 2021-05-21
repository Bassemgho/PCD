import mongoose from 'mongoose';
import userApp from './userApp.js'

const carteVirtuelleSch = mongoose.Schema({
  id_client:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appuser'
  },
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise'
  },
  solde:{
    type:Number,
    default:0
  }
})

carteVirtuelleSch.pre('save',async function (next) {
  await userApp.update({_id:this.id_client},{$push:{cartes:this._id}})
  next();

})
const carteVirtuelle = mongoose.model('carteVirtuelle',carteVirtuelleSch);
carteVirtuelle.createIndexes();
export default carteVirtuelle;
