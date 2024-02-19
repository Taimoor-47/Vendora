import React from 'react'
import offer_img from "../../Assets/offer.png"
import "./Offers.css"
function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusives</h1>
        <h1>Offers For You</h1>
        <p>only best seller product</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
       <img src={offer_img} alt="offerImg" />
      </div>
    </div>
  )
}

export default Offers


