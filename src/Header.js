import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header({text}) {
const cart =useSelector(state=>state.cart)
console.log(cart);
  return (
    <div className='header'>
    <div className='header_home'>
    <Link target='' className='text-decoration-none text-white' to='/'>
    <p><i className="bi bi-house">Home</i></p>
    </Link>
    </div>
    {text? <div>{text}</div>:<div></div>}
    
    <div className='header_cart'>
    <Link className='text-decoration-none text-white' to='/checkout'>
    <p><i className="bi bi-cart4"><small>{cart.length}</small></i></p>
    </Link>
    </div>
    </div>
  )
}

export default Header