import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='left-section'>
          <h3 style={{marginLeft:"8px" , marginBottom:"19px"}}>Personal Information</h3>
          <div className='personal-info'>
            <h6>Email</h6>
            <p>email@email.com</p>
          </div>
          <div className='personal-info'>
            <h6>Phone Number</h6>
            <p>9785-30546786</p>
          </div>
          <div className='personal-info'>
            <h6>Address</h6>
            <p>Karachi, Pakistan</p>
          </div>

        </div>
        <div className='right-section'>
          <h3>Send a message</h3><br/>
          <textarea className='message' cols="120" rows="05" placeholder='Your Message'></textarea><br/><br/>
          <button className='button'>Send</button>
        </div>
      </div>
    </>
  )
}

export default Contact