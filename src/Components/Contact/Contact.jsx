import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>Get In Touch</h1>
      <div className="main">
        <form action="" className="form-container">
          <label htmlFor="">Name: </label>
          <input type="text" placeholder='Enter your name'/>
          <label htmlFor="">Email: </label>
          <input type="email" placeholder='Enter your email'/>
          <label htmlFor="">Message: </label>
          <textarea name="" id="" placeholder='Leave a message'></textarea>
          <button className="submit" type='submit'>Submit</button>
        </form>
        <div className="socials">
          <div className="work-section">
            <i class='bx bxl-gmail'> anjalthapa578@gmail.com</i>
          </div>
          <div className="work-section">
            <i class='bx bx-phone'> +977 9813014613</i>
          </div>
          <div className="work-section">
            <i class='bx bx-location-plus'>  Lalitpur,Nepal</i>
          </div>
          <div className="work-section">
            <i class='bx bxl-github'><a href="https://github.com/AnjalDevJr" target='_blank'> Github</a></i>
          </div>
          <div className="work-section">
            <i class='bx bxl-linkedin-square'><a href="https://www.linkedin.com/in/anjal-thapa-6b72842a1/" target='_blank'> LinkedIn</a></i>
          </div>
          <div className="work-section">
            <i class='bx bxl-instagram' ><a href="https://instagram.com/_anjalholic_" target='blank'> Instagram</a></i>
          </div>
        </div>
      </div>
      
      <hr style={{width: '100%', background: 'black'}} />
      <footer className='footer'>
        <div className="footer-bottom">
          <p className="footer-bottom-left">&#169; 2024 Anjal Thapa. All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact