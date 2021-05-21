import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'
import protect from '../middlewares/protect.js'
import {addptvente} from '../controllers/ptvente.js'
import {addCaissier} from '../controllers/caissier.js'
import {getptvente} from '../controllers/getptvente.js'
import {addevent} from '../controllers/event.js'
import {getshop} from '../controllers/shop.js'
import {getcaissier} from '../controllers/caissier.js'
import {updateEntreprise} from '../controllers/users.js'
import {getclient} from '../controllers/appControllers/userApp.js'
import {addparam} from '../controllers/auth.js'
import {getevent} from '../controllers/event.js'

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
//router.post('/addptsventes',addptvente);
router.route('/addptsventes').post(protect,addptvente);
router.route('/addcaissier').post(protect,addCaissier);
router.route('/addevent').post(protect,addevent);
// router.route('/shop/get').get(protect,getshop)

//saw

router.route('/getevent').get(protect,getevent);

router.route('/ptvente/get').get(protect,getptvente);
router.route('/caissier/get').get(protect,getcaissier);
//
router.route('/update').post(protect,updateEntreprise);

router.route('/getclient').get(protect,getclient);
// à modifier w nhotha fel params.js 
router.route('/addparam').post(protect,addparam);

export default router
