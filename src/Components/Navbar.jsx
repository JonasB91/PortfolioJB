import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`fixed-header ${showMenu ? 'show-menu' : ''}`}>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a href="#" className='navbar-brand'>J.B Portfolio</a>
          <button className='navbar-toggler' type='button' onClick={toggleMenu}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><a className='nav-link' href="#about">About</a></li>
              <li className='nav-item'><a className='nav-link' href="#work">Project's</a></li>
              <li className='nav-item'><a className='nav-link' href="#skills">Skills</a></li>
              <li className='nav-item'><a className='nav-link' href="#footer">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
