import express from 'express'
import {signin,signup,getclients} from '../controllers/Admin.js';

const router = express.Router();
router.post('/signin',signin);
router.post('/signup',signup);
router.get('/clients',getclients);

export default router
