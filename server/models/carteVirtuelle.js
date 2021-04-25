import mongoose from 'mongoose';

const carteVirtuelleSch = mongoose.Schema({
  id_client:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'appuser'
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
const carteVirtuelle = mongoose.model('carteVirtuelle',carteVirtuelleSch);
carteVirtuelle.createIndexes();
export default carteVirtuelle;
