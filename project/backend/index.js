import express from "express"
import router from "./routers/userlogin.js"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app=express();
// app.get("/",(req,res)=>{
//     res.send("this is hom page")
// })


app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/project_eccomrcse")
app.use(router)

app.listen(4000,()=>{
console.log("running port 4000")
})