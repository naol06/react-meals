import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { Auth } from './firebaseConfig';


function Header({user}) {
  const [name, setname] = useState(null);
  const navigate=useNavigate()
  const logoutfun=()=>{
    signOut(Auth).then(() => {
     navigate('/login')
     window.location.reload()
    }).catch((error) => {
      console.log(error);
    });

  }
const cart =useSelector(state=>state.cart)
useEffect(() => {
 if (user) {
  setname(user.split("@")[0])
 }
}, []);
console.log(cart);
  return (
    <div className='header'>
    <div className='header_home'>
    <Link target='' className='text-decoration-none text-white' to={user?'/':'/login'}>
    <p><i className="bi bi-house">Home</i></p>
    </Link>
    </div>

   
    <div className='header_cart '>
    {name &&<p>Welcome: <small className='fw-bold text-warning'>{name}</small></p>}
    </div>
    <div className='d-flex justify-content center '>
    {user &&<Link className='text-decoration-none text-white ' to='/checkout'>
    <p><i className="bi bi-cart4"><small>{cart.length}</small></i></p>
    </Link>}
   {user && <button type="button" onClick={logoutfun} class="mx-3  btn btn-dark">Logout</button>}
    </div>
    </div>
  )
}

export default Header