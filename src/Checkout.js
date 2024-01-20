import React from 'react'
import "./Checkout.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from './redux/cartAction';

function Checkout() {
  const carts=useSelector(state=>state.cart)
  const getTotalCost = (carts) => {
    let sum =0
    for (let i = 0; i < carts.length; i++) {
     sum=sum + carts[i].item.price
      
    }
    return sum;
   

};
const checkCart=(carts)=>{
  if(carts.length!==0){
    return getTotalCost(carts)
  }
  else{
    return 0
  }
}
const dispatch=useDispatch()
  return (
    <div className='d-flex row m-3'>
    <div className='col-6  m-2'>
    <div className='border-bottom mb-4'>
    <img className='w-100' src='https://msme.co-opbank.co.ke/wp-content/uploads/2022/04/Chapa-pay-E-commerce-APROVED-Logo-01.png' alt=''/>
    
    </div>
    <div></div>
    {carts.map((cart, i)=>{
      
      return  <div  key={i}  className='border  p-3 mb-3' >
      <div className='checkout_info'>
      <p>{cart.item.title}</p>
      <p>{cart.item.price}</p>
      <div className="d-flex">
      {Array(cart.item.rating).fill().map(()=>{
      return <p className="bi painte painte bi-star-fill"></p>
      
      })
        
      }
      </div>
      
      </div>
      <img className='w-100' src={cart.item.image} alt=''/>
      <div className='align-items-center mt-4 justify-content-center d-flex w-100'>
          <button type="button" onClick={()=>dispatch(removeFromCart(cart.item.id))} className=" btn btn-dark">Remove From Cart</button>
          </div>
          </div>
    })}
    </div>

    <div className=' col-5'>
    <div className='border p-4 pb-0' style={{height:"150px"}}>
    <p className='justify-content-center fs-5 d-flex w-100'>Subtotal({carts.length} items)<small><strong>$ {checkCart(carts)  }</strong></small></p>
    <div className='align-items-center mt-5  justify-content-center d-flex w-100'>
    <button type="button" className=" btn btn-warning">Preceed to checkout</button>
    </div>
    </div>

   
    </div>
    </div>
  )
}

export default Checkout