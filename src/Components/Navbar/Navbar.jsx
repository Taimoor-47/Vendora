import React, { useState } from "react";
import { Link } from 'react-router-dom';
import cartLogo from "../../Assets/cart.png"
import "./Navbar.css"



function Navbar() {

    const [menu,setMenu]=useState("shop");
  return (
    <div className='nav'>
        <div className="site-name">
            <h1><Link style={{textDecoration:"none",color:"#626262"}} to={`/`}>Vendora</Link></h1>
        </div>

        <ul className="nav-lists">
            <li onClick={()=>(setMenu("shop"))}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("men"))}><Link style={{textDecoration:"none",color:"#626262"}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("women"))}><Link style={{textDecoration:"none",color:"#626262"}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("kids"))}><Link style={{textDecoration:"none",color:"#626262"}}to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div className="cart-logo">
        <Link to ="/login"> <button className='login-btn'>Login</button></Link>
           
            <img className='cart-logo-size' src={cartLogo} alt="cart Logo" />
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
