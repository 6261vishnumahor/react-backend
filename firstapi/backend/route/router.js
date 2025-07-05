import express from "express"
import { submitdata,fetchdata } from "../controller/routeController.js"
const router=express.Router()
router.post("/submitdata",submitdata)
router.get("/fetchdata",fetchdata)

export default router