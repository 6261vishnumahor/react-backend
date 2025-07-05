import axios from "axios"
import { useState } from "react"



const Home=( props)=>{
const[nm,setNm]=useState("")
const[em,setEm]=useState("")
props.val2("vinit")

console.log(nm)
console.log(em)

const obj={
    "name":nm,
    "email":em
}
const sub=()=>{
    axios.post("http://localhost:3000/submitdata",obj)
    setNm("")
    setEm("")
}

console.log(obj)

    return(
        <>
        {props.val}
        {props.val1}
        {props.val2}
      <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}} placeholder="Enter the name " /><br></br>
      <input type="text" value={em} onChange={(e)=>{setEm(e.target.value)}} placeholder="Enter the email " /><br></br>
      <button onClick={sub}>submit</button>
        </>
    )

}
export default Home