import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import{useDispatch, useSelector} from "react-redux";
import {cart} from "./userSlice.jsx"
import "./product.css"
import { useNavigate } from "react-router-dom";

const Product=()=>{
  const card=useSelector(e=>e.user.card)
const dis=useDispatch()
const nav=useNavigate()

const product=(ca)=>{
    console.log(ca)
    dis(cart(ca))
    nav("/cart")
}



    const [a,setA]=useState([])
    useEffect(()=>{
       const Getdata=async()=>
        { 
        const f= await axios.get('http://localhost:3000/product')
         const g=await f.data 
         setA(g)
       }
       Getdata();
    },[])
    return(
        <>
        <div className="product-grid">
   { 
   a.map(e => (
    <div key={e._id} className="product-card" onClick={()=>{product(e)}}>
      <img src={e.images} alt={e.image} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{e.name}</h2>
        {/* <p className="product-description">{e.description}</p> */}
        <p className="product-category">{e.category}</p>
        <p className="product-price">₹{e.price}</p>
        {/* <p className="product-stock">Stock: {e.stock}</p> */}
        {/* <p className="product-stock">Size: {e.size}</p> */}
      </div>
    </div>
  ))}
</div>

        </>
    )
}
export default Product