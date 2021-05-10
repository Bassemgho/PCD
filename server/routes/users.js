import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'
import protect from '../middlewares/protect.js'
import {addptvente} from '../controllers/ptvente.js'
import {addCaissier} from '../controllers/caissier.js'

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
router.route('/addptsventes').post(protect,addptvente);
router.route('/addcaissier').post(protect,addCaissier);
export default router
