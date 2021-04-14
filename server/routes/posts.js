import express from 'express';
import {getPost,createPost} from '../controllers/posts.js'
// import  from '../controllers/posts.js'


const router = express.Router();
// no buisness logic
//then remove call back functionality
router.get('/',getPost);
router.post('/',createPost);
export default router;
