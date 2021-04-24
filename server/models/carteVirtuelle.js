import mongoose from 'mongoose';

const carteVirtuelleSch = mongoose.Schema({
  id_entreprise:String,
  solde:{
    type:Number,
    default:0
  }
})
const carteVirtuelle = mongoose.model('carteVirtuelle',carteVirtuelleSch);
carteVirtuelle.createIndexes();
export default carteVirtuelle;
