import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
      <nav className='links'>
          <li><Link to='./'>Home</Link></li>
          <li><Link to='./about'>About</Link></li>
          <li><Link to='./contact'>Contact</Link></li>
          <li><Link to='./search'>Search</Link></li>


          <div className="theme-btn">
              <button>theme</button>
          </div>
    </nav>
  )
}

export default Navbar