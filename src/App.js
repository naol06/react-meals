import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {Route,Routes} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import { Auth } from './firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { userState } from './redux/cartAction';
import { useEffect } from 'react';
import NotFoundPage from './NotFoundPage';

function App() {
  const dispatch=useDispatch()
useEffect(() => {
 Auth.onAuthStateChanged((authUser)=>{
  if(authUser){
dispatch(userState(authUser.email))
  }
  
 }) 
}, []);
const user=useSelector(state=>state.user)
  return (
    <div className="">
    {user? <Routes>
    <Route path='/' element={<div><Header user={user} /><Home/></div>}/>
    <Route path='/checkout' element={<div><Header user={user}/><Checkout/></div>}/>
    <Route path="*"  element={<NotFoundPage />} />
    </Routes>:<Routes>
    <Route path='/register' element={<div><Header  /><Register/></div>}/>
<Route path='/login' element={<div><Header  /><Login/></div>}/>
<Route path="*"  element={<NotFoundPage />} />
    </Routes>}
    </div>
  );
}

export default App;
