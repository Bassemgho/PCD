import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'
import protect from '../middlewares/protect.js'
import {addptvente} from '../controllers/ptvente.js'

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
router.route('/addptsventes').post(protect,addptvente)
export default router
