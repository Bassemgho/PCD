import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userschema = mongoose.Schema({
  id_entreprise:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'entreprise'
  },
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
  resetpasswordtoken:'String',
  resetpasswordexpire:Date

})
userschema.index({ email: 1}, { unique: true })
userschema.pre("save",async function(next){
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next();
})
userschema.methods.matchPasswords =async function(password) {
  return await bcrypt.compare(password,this.password)
}
userschema.methods.getsignedtoken = function () {
  return jwt.sign({id:this._id},"testsecret",{expiresIn:"10min"})
}
const users = mongoose.model('users',userschema);
users.createIndexes()


export default users