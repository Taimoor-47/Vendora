import React from 'react'
import "./Item.css"
function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
           <div className="item-price-new">
           <p><span>Rs:</span>{props.new_price}</p>
           </div>
           <div className="item-price-old">
           <p><span>Rs:</span>{props.old_price}</p>
           </div>
        </div>

      
    </div>
  )
}

export default Item
