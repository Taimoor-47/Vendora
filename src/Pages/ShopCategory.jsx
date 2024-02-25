import React from 'react'
import { useContext } from 'react'
import "./css/ShopCategory.css"
import Item from '../Components/Item/Item'
import { ShopContext } from '../ShopContext';

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='ShopCategory'>
      <img src={props.banner} alt="" />
      <div className="shopCategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} 
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}

            
            />
          }else{
            return null;
          }
        })}
        <p>
          <span></span>
        </p>
      </div>
    </div>
  )
}

export default ShopCategory
