import express from 'express'
import {signin,signup,viewcards} from '../../controllers/appControllers/userApp.js'
import protectapp from '../../middlewares/protectapp.js'

const router = express.Router();

router.route('/signin').post(signin);
router.route('/signup').post(signup);
router.route('/cards').get(protectapp,viewcards);
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