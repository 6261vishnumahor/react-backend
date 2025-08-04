import { useDispatch, useSelector } from "react-redux";
import "./cart.css"
import { useNavigate } from "react-router-dom";
// import Addtocart from "./addtocart";+
import { addtocart } from "./userSlice";
import { useState } from "react";
const Cart = () => {
  const [a, setA] = useState("")
  const card = useSelector(e => e.user.card)
  const dis = useDispatch()
  const nav = useNavigate()
  const bag = (h) => {
    dis(addtocart(h))
    nav("/addtocart")
  }
  const size = (arg,arg1) => {
    
    setA(arg)
    console.log(a)
  }

  return (
    <>
      this is category

      {
        card.map(b => (<div key={b._id}  >
          <div className="product-page">
            <div className="gallery">
              {/* Main image and thumbnails */}
              <img src={b.images} alt={b.name} className="main-image" />
            </div>
            <div className="info">
              <h1>{b.name}</h1>
              <p className="price">₹{b.price}</p>
              <p className="category">{b.category}</p>
              <p className="description">{b.description}</p>


              <div className="options">
                e.g. size, color selectors
                Interactive choices like radio buttons or selectors
                {/* <p >{b.size}</p> */}
                <input type="radio" name="Size" value="S" id="s" />
                <label onClick={() => { size("s",b._id) }} htmlFor="s">S</label>
                <input type="radio" name="Size" value="m" id="M" />
                <label htmlFor="M" onClick={() => { size("m",b._id) }} >M</label>
                <input type="radio" name="Size" value="l" id="L" />
                <label htmlFor="L" onClick={() => { size("l",b._id) }} >L</label>
                <input type="radio" name="Size" value="xl" id="XL"/>
                <label htmlFor="XL" onClick={() => { size("xl",b._id) }} >XL</label>
              </div>

              <div className="actions">
                <input type="number" min="1" defaultValue="1" />
                <button className="add-cart" onClick={() => { bag(b) }}>Add to Cart</button>
              </div>
              <div className="stock">{b.stock < 5 ? `Only ${ b.stock } left!` : ''}</div>
            </div>
          </div>
        </div>
        ))
      }

    </>
  )
}
export default Cart;