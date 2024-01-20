import React from 'react'
import './Products.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/cartAction'
function Products({id,title,rating,price,image}) {
const dispatch=useDispatch()
  return (
    <div className='product'>
    <div className='product_info'>
    <p className='product_title'>{title}</p>
    <p className='product_price'>$<strong>{price}</strong></p>
   <div className='product_rating'>
   {Array(rating).fill().map(()=>{
    return <p className="bi painte painte bi-star-fill"></p>
 })}
   </div>
    <p></p>
    </div>
    <img className='product_image' src={image} alt=''/>

    <button type="button" onClick={()=>dispatch(addToCart({id,title,rating,price,image}))}  className="btn  ">Add to Cart</button>
    </div>
    
  )
}

export default Products