import express from "express"
import { userlog } from "../controller/loginController.js";
const router=express.Router();

// router.get("/",(req,res)=>{
//     res.send("this is home page")
// })
router.post("/login",userlog)
export default router;