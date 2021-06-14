import express from 'express'
import {signin,signup,viewcards,signincaissier} from '../../controllers/appControllers/userApp.js'
import {getshop} from '../../controllers/shop.js'
import {addachat} from '../../controllers/achat.js'

import {acheterbon,getbonsclient,removebonach} from '../../controllers/Bon.js'

import protectcaissier from '../../middlewares/protectcaissier.js'
import protectapp from '../../middlewares/protectapp.js'

const router = express.Router();

router.route('/signin').post(signin);
router.route('/signup').post(signup);
router.route('/signincaissier').post(signincaissier)
router.route('/cards').get(protectapp,viewcards);
router.route('/shop/get').get(protectapp,getshop)
router.route('/addachat').post(protectcaissier,addachat)

router.route('/acheterbon').post(protectapp,acheterbon);
router.route('/getbons').get(protectcaissier,getbonsclient);
router.route('/removebonach').post(protectcaissier,removebonach);


export default router;


/*
import express from 'express'
import { ajoutAchat } from '../../controllers/Achat.js';
import {signin,signup,viewcards} from '../../controllers/appControllers/userApp.js'
import protectapp from '../../middlewares/protectapp.js'

const router = express.Router();

router.route('/signin').post(signin);
router.route('/signup').post(signup);
router.route('/cards').get(protectapp,viewcards);
router.route('/ajoutAchat').post(protectapp,ajoutAchat);
export default router;
*/
