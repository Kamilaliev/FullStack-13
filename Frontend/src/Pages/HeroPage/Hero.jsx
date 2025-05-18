import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
            <p>65% OFF</p>
            <h2>NEW PLANT</h2>
            <span>Pronia , With 100% Natural, Organic $ Plant Shop</span>
            <button className='hero-btn'>Discover Now</button>
        </div>
        <div className="hero-img">
                <img src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero
