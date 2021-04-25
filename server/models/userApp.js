import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import entreprise from './entreprise.js'
import carteVirtuelle from './carteVirtuelle.js'

const userApp = mongoose.Schema({
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
  email: {
    type: 'String',
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  phonenumber:String,
  cartes:{
    type:[mongoose.Schema.Types.ObjectId],

    default:[],
  }


})
userApp.pre("save",async function(next){
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt);

  next();
})
userApp.methods.matchPasswords =async function(password) {
  return await bcrypt.compare(password,this.password)
}
userApp.methods.getsignedtoken = function () {
  return jwt.sign({id:this._id},"testsecret",{expiresIn:"10min"})
}
userApp.methods.initializecards = async function () {
  const data = await entreprise.find({},'_id').exec();
  try {

    Object.values(data).map( async (item) => {
      const carte = await carteVirtuelle.create({id_entreprise:item,id_client:this._id});
      this.cartes.push(carte._id)
      // console.log(this.cartes);
  })}
catch (e) {
    console.log(e.message);

  }



}
const appuser = mongoose.model('Appuser',userApp);
appuser.createIndexes()


export default appuser
