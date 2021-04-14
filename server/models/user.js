import mongoose from 'mongoose'

const userschema = mongoose.Schema({
  username:String,
  password:String
})
const users = mongoose.model('users',userschema);
export default users
