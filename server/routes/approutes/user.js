import express from 'express'
import {signin,signup,viewcards} from '../../controllers/appControllers/userApp.js'
import protectapp from '../../middlewares/protectapp.js'

const router = express.Router();

router.route('/signin').post(signin);
router.route('/signup').post(signup);
router.route('/cards').get(protectapp,viewcards);
export default router;
