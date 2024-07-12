/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './footer.css'
import { useEffect } from 'react'


export default function Footer() {
  const [scroll, setScroll] =React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 1000) {
        setScroll(true); 
      } else {
        setScroll(false); 
      }
    });
  }, []); 

  return (
    <div className="footer">
        <div className="up">
    
        <ul className="one">
            <li>need help</li>
            <li>contact us</li>
            <li>track order</li>
            <li>Returns & Refunds</li>
            <li>FAQ's</li>
            <li>Career</li>
        </ul>
        <ul className="two">
            <li>company</li>
            <li>about us</li>
            <li>achats blog</li>
            <li>achatsian</li>
            <li>Collaboration</li>
            <li>media</li>
        </ul>
      
    
        <ul className="three">
          <li>more info</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>Sitemap</li>
        </ul>
        <ul className="four">
          <li>Location  </li>
          <li>Tsupport@euphoria.in</li>
          <li>Highland Strett, A04 Street 4014</li>
          <li>New York City, USA</li>
          <li>Phone: +000 999 8888</li>
        </ul>
        </div>
        <div className="down">
            <p>Copyright © 2024  Achats site . All rights reserved.</p>
        </div>

        {scroll &&
          <a href="#up" className='icon-chevron-thin-down' id='scroling2'></a>
        }
    </div>
  )
}
