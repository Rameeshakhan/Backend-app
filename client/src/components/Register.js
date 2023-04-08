import React from 'react'
import register from "./images/register.jpg"
import name from "./images/name.png"
import email from "./images/gmail.png"
import phone from "./images/phone.png"
import profession from "./images/profession.png"
import password from "./images/password.png"
import cpassword from "./images/cpassword.png"

const Register = () => {
  return (
    <>
      <div className='container'>
        <div className='left-container'>
          <h1>Register</h1>
          <form>
            <div className='input-feild'>
              <img className='icon' src={name} alt="name" />
              <input type="text" name="name" placeholder='Your Name' />
            </div><br />
            <div className='input-feild'>
            <img className='icon' src={email} alt="email" />
              <input type="email" name="email" placeholder='Your Email' />
            </div> <br />
            <div className='input-feild'>
            <img className='icon' src={phone} alt="phone" />
              <input type="text" name="phone" placeholder='Your Number' />
            </div><br />
            <div className='input-feild'>
            <img className='icon' src={profession} alt="profession" />
              <input type="text" name="profession" placeholder='Your Profession' />
            </div> <br />
            <div className='input-feild'>
            <img className='icon' src={password} alt="password" />
              <input type="password" name="password" placeholder='Password' />
            </div><br />
            <div className='input-feild'>
            <img className='icon' src={cpassword} alt="cpassword" />
              <input type="password" name="confirm-password" placeholder='Confirm Password' />
            </div><br /><br />
           <button className='button'>Register</button>
          </form>
        </div>
        <div className='right-container'>
          <img className="image" src={register} alt="register" />
        </div>
      </div>
      
    </>
  )
}

export default Register