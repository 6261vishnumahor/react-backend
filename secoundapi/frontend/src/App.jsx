import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./home"
import Product from "./product.jsx"
import Cart from "./cart.jsx"
import Addtocart from "./addtocart.jsx"
const App=()=>{
    return(
        <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/addtocart' element={<Addtocart></Addtocart>}></Route>
        
       </Routes>
       </BrowserRouter>
        </>
    )
}
export default App;