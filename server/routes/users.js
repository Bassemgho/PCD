import express from 'express'
//controllers
//import {} from '../controllers/users.js'
import {signup,signin} from '../controllers/auth.js'
import protect from '../middlewares/protect.js'
import {addptvente,deleteptvente} from '../controllers/ptvente.js'
import {addCaissier} from '../controllers/caissier.js'
import {getptvente} from '../controllers/getptvente.js'
import {addevent} from '../controllers/event.js'
import {getshop} from '../controllers/shop.js'
import {getcaissier,deletecaissier} from '../controllers/caissier.js'
import {updateEntreprise} from '../controllers/users.js'
import {getclient} from '../controllers/appControllers/userApp.js'
import {addparam} from '../controllers/auth.js'
import {getevent,delevent} from '../controllers/event.js'

import {getnom} from '../controllers/users.js'


const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
//router.post('/addptsventes',addptvente);
router.route('/addptsventes').post(protect,addptvente);
router.route('/deleteptvente').post(protect,deleteptvente);


router.route('/addcaissier').post(protect,addCaissier);
router.route('/addevent').post(protect,addevent);
// router.route('/shop/get').get(protect,getshop)

//saw

router.route('/getevent').get(protect,getevent);

router.route('/ptvente/get').get(protect,getptvente);
router.route('/caissier/get').get(protect,getcaissier);
router.route('/shop/get').get(protect,getshop);
//
router.route('/update').post(protect,updateEntreprise);

router.route('/getclient').get(protect,getclient);
// à modifier w nhotha fel params.js
router.route('/addparam').post(protect,addparam);
//router.route('/deleteptvente').delete(protect,deleteptvente);
router.route('/delev').post(protect,delevent);

router.route('/deletecaissier').post(protect,deletecaissier);

router.route('/getnom').get(protect,getnom);

export default router
