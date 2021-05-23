import express from 'express';
import {addbonparam,getbonparams,deletebon} from '../controllers/bonparam.js'
import protect from '../middlewares/protect.js'
import {addredparam,getredparams,deletered} from '../controllers/redparam.js'
//import {getbonparams} from '../controllers/bonparam.js'
//import {getredparams} from '../controllers/redparam.js'

const router = express.Router();
router.route('/addbonparam').post(protect,addbonparam);
router.route('/addredparam').post(protect,addredparam);
router.route('/getbonparams').get(protect,getbonparams);
router.route('/getredparams').get(protect,getredparams);
router.route('/deletebon').post(protect,deletebon);
router.route('/deletered').post(protect,deletered);
export default router;