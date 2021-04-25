import mongoose from 'mongoose'

const entreprise_schema = mongoose.Schema({
  name:String,
  logo:String,

})
const entreprise = mongoose.model('entreprise',entreprise_schema);
export default entreprise;
