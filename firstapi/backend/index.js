import express from "express"
import router from "./route/router.js"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
const app =express()


app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/firstserverdata")




app.use(router)
app.listen( 3000,()=>{
    console.log("server running port in 3000")
})