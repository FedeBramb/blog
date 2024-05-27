import React from "react";

import logoIcon from '../../assets/imagesLogo/logo-icon.webp';

import "./SocialBar.css";

function SocialBar({ position, children }) {
  const containerClass = position === 'header' ? 'social-bar-header' : 'social-bar-footer';
  return (
    <div className={`${containerClass} sticky social-bar`}>
      {children}
      {position === 'footer' && <img src={logoIcon} alt="Logo" className="logo-image" />}
      <div className="icons">
        <a href="http://google.com" className="social-icon"><i className="fa-brands fa-facebook"></i></a>
        <a href="http://google.com" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
        <a href="http://google.com" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="http://google.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        <a href="http://google.com" className="social-icon"><i className="fab fa-youtube"></i></a>
        <a href="http://google.com" className="social-icon"><i className="fab fa-pinterest-p"></i></a>
      </div>
    </div>
  );
}

export default SocialBar;



