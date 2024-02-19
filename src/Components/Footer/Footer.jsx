import React from 'react'
import "./Footer.css"
import twitter from "../../Assets/twitter.png"
import fb from "../../Assets/twitter.png"
export default function Footer() {
  return (
    <div className='border-top'>
 <div className='footer'>
      <div className="footerlogo">
       
        <h1>Vendora</h1>
      </div>
      <ul className='details'>
        <li>Company</li>
        <li>Products</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={twitter} alt="" />
            <img src={fb}alt="" />
        </div>
      </div>
    </div>
    <div className='border-bottom'>
        <p>Copyright @ 2024 Taimoor Malik All right reserved</p>
        <div>
    
        </div>
    </div>
    </div>
   
  )
}


