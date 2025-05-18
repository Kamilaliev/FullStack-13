import React, { useContext } from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import "./navbar.css"
import { Link } from 'react-router-dom';
import { BasketContext } from '../../Context/BasketContext';
function Navbar() {
    let {basket,setBasket}=useContext(BasketContext)
  return (
   <div className="navbars">
    <div className="nav-numbers">
        <FaPhoneSquareAlt className='nav-num' /><span>+00 123 456 789</span>
    </div>
    <div className="nav-text">
        <Link to="/">
        <h1>Pronia</h1></Link>
    </div>
    <div className="nav-list">
        <ul>
            <li><CiSearch /></li>
            <li><CiHeart /></li>
           <Link to="basket">
            <li className='basket-icon'><FaBasketShopping  />
             <span className='basket-num'>{basket.length}</span></li></Link>
            <Link to="admin">
            <li><RiAdminFill />
           
            </li>
            </Link>
            
        </ul>
    </div>
   </div>
  )
}

export default Navbar
