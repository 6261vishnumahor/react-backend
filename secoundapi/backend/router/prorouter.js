import express from 'express';
import { pro } from '../controller/controllerPro';

const router= express.Router();
router.post('/product',pro)