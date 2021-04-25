import express from 'express';

import {createentreprise} from '../controllers/entreprise.js'
const router = express.Router();
router.route('/create').post(createentreprise)

export default router;
