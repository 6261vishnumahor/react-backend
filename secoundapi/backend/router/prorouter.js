import express from 'express';
import { pro, proGet, updatesize } from '../controller/controllerPro.js';

const router= express.Router();
router.post('/product', pro)
router.get('/product', proGet)
router.put('/updateproduct/:id', updatesize)

export default router;