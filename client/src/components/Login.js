import React from 'react'
import { Link } from 'react-router-dom';
import register from "./images/register.jpg"
import email from "./images/gmail.png"
import password from "./images/password.png"


const Login = () => {
  return (
    <div>
       <div className='container'>
       <div className='right-container'>
          <img className="image" src={register} alt="register" />
          <Link className="nav-link active" to="/register"><p>Dont have account ? Register here</p></Link>
        </div>
        <div className='left-container'>
          <br/>
          <h1>Login</h1> <br/>
          <form>
            <div className='input-feild'>
            <img className='icon' src={email} alt="email" />
              <input type="email" name="email" placeholder='Your Email' />
            </div> <br />
            <div className='input-feild'>
            <img className='icon' src={password} alt="password" />
              <input type="password" name="password" placeholder='Password' />
            </div><br />
            <p className="forgot-password">Forgot Password</p><br/>
           <button className='button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login