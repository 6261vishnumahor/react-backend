import express from 'express';
import { pro, proGet } from '../controller/controllerPro.js';

const router= express.Router();
router.post('/product', pro)
router.get('/product', proGet)

export default router;