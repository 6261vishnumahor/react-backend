import express from 'express';
import { pro } from '../controller/controllerPro.js';

const router= express.Router();
router.post('/product',pro)

export default router;