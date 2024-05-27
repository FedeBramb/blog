import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/imagesLogo/logo.png';
import logoMobile from '../../assets/imagesLogo/logoMobile.webp';

import './Navbar.css';


function Navbar() {
  // Utilizziamo lo state che dopo andremo a modificare
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1196);
  const [isOpen, setIsOpen] = useState(false);
  // La gestione degli eventi è una caratteristica di useEffect
  // Cambia il boolean in base alla risoluzione della finestra
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1196);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Funzione per gestire il dropDown, tramite boolean memorizzato nello state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (  
    // Renderizza il nav in base alla risoluzione della view  
    <div className={`navbar ${isSmallScreen && 'smallScreen'}`}>
      {!isSmallScreen && (
        <React.Fragment>
          <Link to="/" className="nav-item first">HOME</Link>
          <Link to="/cookbook" className="nav-item second">RICETTE</Link>
          <img src={logo} className='third' alt='logo'></img>
          <Link to="/glossario" className="nav-item fourth">GLOSSARIO</Link>
          <Link to="/contatti" className="nav-item fifth">CONTATTI</Link>
        </React.Fragment>
      )}
      {isSmallScreen && (
        <React.Fragment>
          <img src={logoMobile} className='logo-small-view' alt='logo'></img>
          <div className="dropcase">
            <button className="menu-button" onClick={toggleMenu}>
              MENU
            </button>
            {isOpen && (
                <div class="dropdown-content">
                  <Link to="/" className="dropItem" onClick={toggleMenu}>HOME</Link>
                  <Link to="/cookbook" className="dropItem" onClick={toggleMenu}>RICETTE</Link>
                  <Link to="/glossario" className="dropItem" onClick={toggleMenu}>GLOSSARIO</Link>
                  <Link to="/contatti" className="dropItem" onClick={toggleMenu}>CONTATTI</Link>
                </div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
} 

export default Navbar;

// Utilizziamo lo state per reattività (reagire ai cambiamenti e rendersi nuovo),
//  codice più chiaro e cosistenza nello stato, mantenendo la consistenza e la
//    sincronizzazione con l'interfaccia utente.
