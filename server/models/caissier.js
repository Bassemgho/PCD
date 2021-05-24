import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const caissierSch = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"entreprise",
    required:[true,'problem getting your entreprise id'],

  },
  name:String,
  username:{
    type:'String',
    required:[true,'please provide a username'],
    unique: true
  },
  password:{
    type:'String',
    required:[true,'please provide a password'],
    minlength:6,
    select:false,

  },
  


  id_ptvente:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ptvente",
  }
})

caissierSch.pre("save",async function(next){
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next();
})
caissierSch.methods.matchPasswords =async function(password) {
  return await bcrypt.compare(password,this.password)
}
caissierSch.methods.getsignedtoken = function () {
  return jwt.sign({id:this._id},"testsecret",{expiresIn:"10min"})

}

const caissier = mongoose.model('caissier',caissierSch);
caissier.createIndexes();
export default caissier;


/*
const caissierSch = mongoose.Schema({
  id_entreprise:{
    type:String,
    required:[true,'problem getting your entreprise id'],

  },
  name:String,
  id_user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Appuser'
  },
})



const caissier = mongoose.model('caissier',caissierSch);
export default caissier;
*/
