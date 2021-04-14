import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title:String,
  message:String,
  creator:String,
  tag:[String],
  selectedfile:String,
  likeCount:{
    type:Number,
    default:0,
  },

  // createdAt : {
  //   type:Date,
  //   default:new Date()
  // },
},{ timestamps: true });
const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;
