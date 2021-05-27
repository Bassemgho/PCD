import express from 'express';
import protect from '../middlewares/protect.js'

import {createentreprise,deleteentreprise} from '../controllers/entreprise.js'
import {getentreprise} from '../controllers/appControllers/getentreprise.js'
const router = express.Router();
router.route('/create').post(createentreprise);
router.route('/display').get(getentreprise);
router.route('/deleteentreprise').post(deleteentreprise);

export default router;
