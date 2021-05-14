import express from 'express';
import {addbonparam} from '../controllers/bonparam.js'
import protect from '../middlewares/protect.js'


const router = express.Router();
router.route("/addbonparam").post(protect,addbonparam);
export default router;
