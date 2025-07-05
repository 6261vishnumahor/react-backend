import { useState,useEffect } from "react"

const About=()=>{
const [s,setS1]=useState(0)
 useEffect(()=>{
    if(s<100){
setTimeout(()=>{
    setS1((s)=>s+1);

} ,100)
    }
    })
    return(
        <>
       <h1>this is {s}</h1>
        </>
    )
}
export default About;