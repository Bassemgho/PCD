import express from 'express'

const router = express.Router();

//controllers
import {gethome} from '../controllers/gethome.js'
//middlewares
import protect from '../middlewares/protect.js'
//routes
router.route('/').get(protect,gethome);

export default router;
