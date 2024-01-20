import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="">
    <Routes>
    <Route path='/' element={<div><Header  /><Home/></div>}/>
    <Route path='/checkout' element={<div><Header text="This is Checkout page"/><Checkout/></div>}/>
    </Routes>
    </div>
  );
}

export default App;
