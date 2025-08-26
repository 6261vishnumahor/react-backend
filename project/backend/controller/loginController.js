import Login from "../models/loginmodels.js"
const userlog=(req,res)=>{
    try{
    const data=req.body
    const log=new Login(data)
    const respons= log.save()
    res.status(200).json({massage:"userlogin",log})
}
catch(arr){
console.log(arr)
}
}

export {userlog}