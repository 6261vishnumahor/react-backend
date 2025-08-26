import mongoose, { Types } from "mongoose";
const userLogin=new mongoose.Schema(
    {
        name:{
            required:true,
            type:String
        },
        sername:{
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        number: {
            type: Number,
            required: true,
        },
    }
)
export default mongoose.model("Login",userLogin)