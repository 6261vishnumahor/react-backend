import { useSelector } from "react-redux";
import "./addtocart.css"
const Addtocart=()=>{
    const cart=useSelector((e)=>e.user.cartitems)
    return(
        <>
         { 
   cart.map(e => (
   <div key={e._id} className="product-card">
  <div className="product-card__image-wrap">
    <img src={e.images} alt={e.name} className="product-card__image" />
    <button className="product-card__cta">Add +</button>
    <span className="product-card__badge">Sale</span>
  </div>
  <div className="product-card__details">
    <h2 className="product-card__name">{e.name}</h2>
    <p className="product-card__price">₹{e.price}</p>
    <p className="product-card__stock">{e.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
  </div>
</div>
  ))}
        </>
    )
}
export default Addtocart;