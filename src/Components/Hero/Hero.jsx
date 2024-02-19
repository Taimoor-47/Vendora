import React from 'react'
import "./Hero.css"
import shopimg from "../../Assets/shop.png"

function Hero() {
  return (
    <div className='hero'>
      <div className="heroleft">
        <h4>New Arrivals Only </h4>
        <div className="hero-hand-icon">
            <p>new</p>
            <p>collections</p>
            <p>for everyone</p>
            
        </div>
        <button>latest Collections</button>
      </div>
      
      <div className="heroright">
       
        <img src={shopimg} alt="" />
      </div>
    </div>
  )
}

export default Hero
