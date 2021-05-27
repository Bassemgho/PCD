import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const adminschema = mongoose.Schema({
  username:{
    type:'String',
    //default:"admin",
    required:[true,'please provide a username'],
    unique: true
  },
  password:{
    type:'String',
    //default:"admin00",
    required:[true,'please provide a password'],
    minlength:6,
    select:false,

  }

})

adminschema.pre("save",async function(next){
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next();
})
adminschema.methods.matchPasswords =async function(password) {
  return await bcrypt.compare(password,this.password)
}
adminschema.methods.getsignedtoken = function () {
  return jwt.sign({id:this._id},"testsecret",{expiresIn:"10min"})
}
const admins = mongoose.model('admins',adminschema);
admins.createIndexes()


export default admins