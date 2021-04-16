import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
export default router
