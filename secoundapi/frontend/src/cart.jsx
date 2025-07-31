import { useDispatch, useSelector } from "react-redux";
import "./cart.css"
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const card=useSelector((e)=>e.user.card)
    const dis=useDispatch()
    const nav=useNavigate()
    const bag=()=>{
        dis(card(bag))
        nav("/addtocart")
    }

    return(
        <>
        this is category
    
  {
  card.map(b => (<div key={b._id}  onClick={()=>{product(b)}}>
   <div className="product-page">
  <div className="gallery">
    {/* Main image and thumbnails */}
    <img src={b.images} alt={b.name} className="main-image"/>
    {/* <div className="thumbs">
      {selected.imagesThumbs.map(src => (
        <img key={src} src={src} onClick={() => setSelectedImage(src)} />
      ))}
    </div> */}
  </div>
  <div className="info">
    <h1>{b.name}</h1>
    <p className="price">₹{b.price}</p>
    <p className="category">{b.category}</p>
    <p className="description">{b.description}</p>

    <div className="options">
      {/* e.g. size, color selectors */}
      {/* Interactive choices like radio buttons or selectors */}
    </div>

    <div className="actions">
      <input type="number" min="1" defaultValue="1" />
      <button className="add-cart" onClick={()=>{bag(b)}}>Add to Cart</button>
    </div>
    <div className="stock">{b.stock < 5 ? `Only ${b.stock} left!` : ''}</div>
  </div>
</div>
</div>
  ))
  }

        </>
    )
}
export default Cart;