import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { CgCreditCard } from "react-icons/cg";
import { RiMailAiFill } from "react-icons/ri";
import "./service.css"
function Service() {
    return (
        <div className="services">
            <div className="service">
                <FaTruckFast  className='service-icon'/>
                <div className="service-text">
                    <h3>Free Shipping</h3>
                    <p>Capped at $319 per order</p>
                </div>

            </div>
             <div className="service">
                <CgCreditCard  className='service-icon'/>
                <div className="service-text">
                    <h3>Free Shipping</h3>
                    <p>Capped at $319 per order</p>
                </div>

            </div>
             <div className="service">
                <RiMailAiFill  className='service-icon'/>
                <div className="service-text">
                    <h3>Free Shipping</h3>
                    <p>Capped at $319 per order</p>
                </div>

            </div>
        </div>
    )
}

export default Service
