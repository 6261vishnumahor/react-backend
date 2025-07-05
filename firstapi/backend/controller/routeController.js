
import userTable from"../models/userModel.js"
const submitdata= async(req,res)=>{
    const{name,email}= req.body
   await userTable.create({name,email})
    res.end()
}

const fetchdata=async(req,res)=>{
    const res1=await userTable.find()
    res.json(res1)
}
export {submitdata,fetchdata}