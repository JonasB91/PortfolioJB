import React from 'react'
import '../Css/Navbar.css'

const Navbar = () => {
  return (
    <header className='fixed-header'>
      <nav className='navbar'>
          <div className='title'>J.B Portfolio</div>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
      </nav>
    </header>
  )
}

export default Navbar;