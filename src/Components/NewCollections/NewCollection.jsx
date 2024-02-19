import React from 'react'
import newCollections from "../../Assets/newCollections"
import "../NewCollections/NewCollection.css"
import Item from '../Item/Item'
function NewCollections() {
  return (
    <div className="popular">
      <h1>New Collections <hr /></h1>
      <div className="popular-items">
        {newCollections.map((item,i)=>{
            return(<Item
            key={i} 
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
             />
            )
        })}
      </div>
    </div>
  )
}

export default NewCollections
