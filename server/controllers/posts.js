import PostMessage from '../models/postmessage.js'
export const getPost = async (req,res) => {
  try {
    const allmessages = await PostMessage.find();

    // console.log(allmessages);
    res.status(200).json(allmessages);
  } catch (e) {
    res.status(404).json({message:e.message})
  }
};
export const createPost = async (req,res) => {
  const post = req.body;
  const newpost = new PostMessage(post)
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (e) {
    res.status(409).json({message:e.message})
  }
}
export default {getPost,createPost};
