import { useState } from "react"
import axios from "axios"

const Home = () => {
    const [nm, setNm] = useState("")
    const [description, setNDis] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [img, setImg] = useState("")
    const [stock, setStock] = useState("")

    //use a redux store to manage the state of the product
//use a reducer to handle the state changes
// let count=useState(e=>e.user.)


    const obj = {
        "name": nm,
        "description": description,
        "price": price,
        "category": category,
        "images": img,
        "stock": stock
    }
    console.log(obj)

    const sub=()=>{
        axios.post("http://localhost:3000/product",obj)
        setNm("")
        setNDis("")
        setPrice("")
        setCategory("")
        setImg("")
        setStock("")
    }

    return (
        <>
            <form action="">
                <input type="text" value={nm} onChange={(e) => { setNm(e.target.value) }} placeholder='Enter the product name' name='name' />
                <input type="description" value={description} onChange={(e) => { setNDis(e.target.value) }} placeholder='Enter the product description' name='dis' />
                <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter the product price' name='price' />
                <input type="category" value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='Enter the product category' name='category' />
                <input type="url" value={img} onChange={(e) => { setImg(e.target.value) }} placeholder='Enter the product img' name='img' />
                <input type="number" value={stock} onChange={(e) => { setStock(e.target.value) }} placeholder='Enter the product stock' name='stock' />
                <button onClick={sub}>submit</button>
            </form>

        </>
    )
}
export default Home