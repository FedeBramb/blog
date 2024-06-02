import React from "react";

import logoIcon from '../../assets/imagesLogo/logo-icon.webp';

import "./SocialBar.css";

function SocialBar({ position, children }) {
  const containerClass = position === 'header' ? 'social-bar-header' : 'social-bar-footer';
  return (
    <div className={`${containerClass} sticky social-bar`}>
      {children}
      {position === 'footer' && <img src={logoIcon} alt="Logo" className="logo-image" width='55' height='52' />}
      <div className="icons">
        <a href="http://google.com" className="social-icon" aria-label="Facebook"><img src="https://icongr.am/fontawesome/facebook-square.svg?size=31&color=1f1f1f" alt="icon Facebook"></img></a>
        <a href="http://google.com" className="social-icon" aria-label="Instagram"><img src="https://icongr.am/fontawesome/instagram.svg?size=31&color=1f1f1f" alt="icon Instagram"></img></a>
        <a href="http://google.com" className="social-icon" aria-label="Whatsapp"><img src="https://icongr.am/fontawesome/whatsapp.svg?size=31&color=1f1f1f" alt="icon Whatsapp"></img></a>
        <a href="http://google.com" className="social-icon" aria-label="Linkedin"><img src="https://icongr.am/fontawesome/linkedin-square.svg?size=31&color=1f1f1f" alt="icon Linkedin"></img></a>
        <a href="http://google.com" className="social-icon" aria-label="YouTube"><img src="https://icongr.am/fontawesome/youtube-square.svg?size=31&color=1f1f1f" alt="icon YouTube"></img></a>
        <a href="http://google.com" className="social-icon" aria-label="Pinterest"><img src="https://icongr.am/fontawesome/pinterest-square.svg?size=31&color=1f1f1f" alt="icon Pinterest"></img></a>
      </div>
    </div>
  );
}

export default SocialBar;



