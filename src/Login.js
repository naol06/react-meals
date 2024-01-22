import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from './firebaseConfig.js';

function Login() {
    const [error, seterror] = useState(null);
    const [data, setdata] = useState({
    
        email:"",
        password:"",
    });
    const navigate=useNavigate()
    const handleLogin=(e)=>{
e.preventDefault()
signInWithEmailAndPassword( Auth, data.email, data.password)
  .then((userCredential) => {
    navigate("/")
    
    
    // ...
  })
  .catch((error) => {
   console.log(error);
  
    seterror("Incorrect Email or Password")
  });
    }
   
    return (
        
        <Container className='d-flex justify-content-center vh-100 align-items-center '>
          <Row className='bg-secondary p-3 rounded text-white'>
            <Col>
            {error &&<div class="alert alert-primary" role="alert">
                <strong>{error} </strong>
            </div>}
              <h1 className='text-info'>Login Page</h1>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input type="email" onChange={e=>setdata({...data,email:e.target.value})}  className="form-control" required placeholder='Enter Your Email'/>
                </div>
                <div className="mb-3">
                  <input type="password" onChange={e=>setdata({...data,password:e.target.value})}  className="border form-control" required placeholder='Enter password' />
                </div>
                <Button   variant="primary" className='w-100 ' type="submit">Login</Button>
              </form>
              <br/>
              <div className='d-flex justify-content-center align-items-center'>
              <p>have an account? <Link to={'/register'} className='text-decoration-none text-warning'>Register</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      );}

export default Login