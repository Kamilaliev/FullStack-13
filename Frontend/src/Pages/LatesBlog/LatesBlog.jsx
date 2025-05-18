import React from 'react'
import { MdOutlineAttachFile } from "react-icons/md";
import "./lates.css"

function LatesBlog() {
    return (
        <div className="latest">
            <div className="latest-text">
                <h4>Latest Blog</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply <br />random text. It has roots in a piece of classical Latin literature</p>
            </div>
            <div className="latest-cards">
                <div className="latest-card">
                    <p>BY: ADMIN 24 April 2025</p>
                    <h4>Maecenas Laoretat Massa</h4>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, molestiae <br />eius saepe quam ab sunt qullam facere delectus quod quas,<br />explicabo accusantium, cupiditate <br />temporibus! Incidunt.</span>
                   <div className="in-card">
                     <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg" alt="" />
                    <MdOutlineAttachFile  className='latest-icon'/>
                   </div>
                
                </div>
                <div className="latest-card">
                    <p>BY: ADMIN 24 April 2025</p>
                    <h4>Maecenas Laoretat Massa</h4>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, molestiae <br />eius saepe quam ab sunt qullam facere delectus quod quas,<br />explicabo accusantium, cupiditate <br />temporibus! Incidunt.</span>
                   <div className="in-card">
                     <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg" alt="" />
                    <MdOutlineAttachFile  className='latest-icon'/>
                   </div>
                
                </div>
                <div className="latest-card">
                    <p>BY: ADMIN 24 April 2025</p>
                    <h4>Maecenas Laoretat Massa</h4>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, molestiae <br />eius saepe quam ab sunt qullam facere delectus quod quas,<br />explicabo accusantium, cupiditate <br />temporibus! Incidunt.</span>
                   <div className="in-card">
                     <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg" alt="" />
                    <MdOutlineAttachFile  className='latest-icon'/>
                   </div>
                
                </div>
            </div>
        </div>
    )
}

export default LatesBlog
