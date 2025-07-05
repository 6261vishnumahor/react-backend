import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
export default mongoose.model("userTable",userModel)