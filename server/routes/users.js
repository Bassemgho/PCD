import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'
import protect from '../middlewares/protect.js'
import {addptvente} from '../controllers/ptvente.js'
import {addCaissier} from '../controllers/caissier.js'
import {addbonparam} from '../controllers/bonparam.js'
import {addredparam} from '../controllers/redparam.js'
import {getptvente} from '../controllers/getptvente.js'
import {addevent} from '../controllers/event.js'

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
//router.post('/addptsventes',addptvente);
router.route('/addptsventes').post(protect,addptvente);
router.route('/addcaissier').post(protect,addCaissier);
router.route('/addbonparam').post(protect,addbonparam);
router.route('/addredparam').post(protect,addredparam);
router.route('/addevent').post(protect,addevent);

//saw

router.route('/:id_entreprise').get(getptvente);


export default router
