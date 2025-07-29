import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors'
import router from './router/prorouter.js';
import mongoose from 'mongoose';
 const app= express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/productdb')
app.use(router)
app.listen(3000,()=>{
console.log("server is running on port 3000")
 })
