import React from 'react'
import './Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://www.instagram.com/boniniboats/">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100047313107816">
          <FaFacebook size="40"  color="#fff"/>
        </a>  
      </div>
      <p className="footer-copyright">© 2022 Copyright: Franco Bonini</p>
    </footer>
  )
}

export default Footer