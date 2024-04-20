import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'

function Navbar() {

  return (
    <div className='navbar-container'> 
    <nav className="p-4">
        <div className='max-w-7x1 mx-auto flex justify-between items-center'>
        <div>
            <Link to="#" className='text-white text-x1 font-bold'>My Portfolio</Link>
        </div>
        <div className='flex space-x-6'>
            <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
            <Link to="/about" className='text-white hover:text-gray-300'>About</Link>
            <Link to="/contact" className='text-white hover:text-gray-300'>Contact</Link>
        </div>
      </div>   
    </nav>
    </div>
  )
}

export default Navbar