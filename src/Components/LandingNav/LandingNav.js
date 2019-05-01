import React from 'react'
import { NavLink } from 'react-router-dom'

import './LandingNav.css'

const LandingNav = () => {
  return (
    <div className="nav-bar">
      <NavLink to='/about' className='nav'>About</NavLink>
      <NavLink to='/contact' className='nav'>Contact</NavLink>
      <NavLink to='/portfolio' className='nav'>Portfolio</NavLink>
    </div>
  )
}

export default LandingNav
