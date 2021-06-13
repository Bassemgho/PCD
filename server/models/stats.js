import mongoose from 'mongoose';

const statsSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise"
  },
  id_ptvente:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ptvente"
  },
  valeurC:{
    type:Number,
    default:0
  },
  month:String,
});
const stats = mongoose.model("stats",statsSch);
stats.createIndexes();
export default stats;
