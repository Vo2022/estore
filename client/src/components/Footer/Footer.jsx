import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span> Women's</span>
          <span> Men's</span>
          <span> Kids</span>
          <span> Accessories</span>
          <span> New Arrivals</span>
        </div>
        <div className="item">
          <h1>Help</h1>
          <span> FAQ</span>
          <span> Help Center</span>
          <span> Order Status</span>
          <span> Returns and Warranty</span>
          <span> Do Not Sell My Personal Information</span>
        </div>
        <div className="item"> 
        <h1>Apply for the new MasterCard</h1>
       <span>
        Earn a $100  gift card after you spend $500 in the first 90 days of account opening.
        
        </span>
        </div>
        <div className="item"> 
        <h1>Connect with us and Save</h1>
        <span>
          Join our Text Alerts to Receive Special Offers! 
          Exclusions Apply!
          Online only. First-time subscribers only.
          Returning subscribers will be resubscribed for marketing /promo emails.
        </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Lam's Store</span>
          <span className='copyright'>© 2021 Lam's Store. All rights reserved.</span>
        </div>
        <div className="right">
          <img className='visa' src="/img/Visa.png" alt="mastercard" />
          <img src="/img/mc.png" alt="mastercard" />
        </div>
      </div>
    </div>
  )
}

export default Footer