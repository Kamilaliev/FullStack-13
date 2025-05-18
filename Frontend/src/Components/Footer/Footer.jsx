import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import "./footer.css"

function Footer() {
  return (
   <div className="footer">
    <div className="foot-info">
      <h4>Pronia</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nam corrupti <br />culpa explicabo, voluptates recusandae  </p>
     <div className="foot-icons">
       <FaFacebookF />
      <FaTwitter />
      <FaPinterest />
      <FaBasketballBall /> 
     </div>
    </div>
    <div className="foot-links">
      <h4> Useful Links</h4>
      <ul>
        <li>About Pronia</li>
        <li>How to shop</li>
        <li>FAQ</li>
        <li>Contact us</li>
        <li>Log in</li>
      </ul>
    </div>
    <div className="foot-acc">
      <h4>My Account</h4>
      <ul>
        <li>Sign In</li>
        <li>View Cart</li>
        <li>My Wishlist</li>
        <li>Track My Order</li>
        <li>Help</li>
      </ul>
    </div>
    <div className="foot-service">
      <h4>Our Service</h4>
      <ul>
        <li>Payment Methods</li>
        <li>Money Guarantee!</li>
        <li>Returns</li>
        <li>Shipping</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className="foot-help">
      <h4>Got Question? Call Us</h4>
      <p>123 456 789</p>
      <span>  Your Address Goes Here</span>
      <img src="https://htmldemo.net/pronia/pronia/assets/images/payment/1.png" alt="" />

    </div>
   </div>
  )
}

export default Footer
