import express from 'express';
import protect from '../middlewares/protect.js'

import {createentreprise} from '../controllers/entreprise.js'
import {getentreprise} from '../controllers/appControllers/getentreprise.js'
const router = express.Router();
router.route('/create').post(createentreprise);
router.route('/display').get(getentreprise);

export default router;
