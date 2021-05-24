import express from 'express';
import {addbonparam} from '../controllers/bonparam.js'
import protect from '../middlewares/protect.js'
import {addredparam} from '../controllers/redparam.js'
import {getbonparams} from '../controllers/bonparam.js'
import {getredparams} from '../controllers/redparam.js'
import {changemontant} from '../controllers/entreprise.js'

const router = express.Router();
router.route("/addbonparam").post(protect,addbonparam);
router.route('/addredparam').post(protect,addredparam);
router.route('/getbonparams').get(protect,getbonparams);
router.route('/getredparams').get(protect,getredparams);
router.route('/changeequiv').post(protect,changemontant);

export default router;
