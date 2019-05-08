import React from 'react'
import { NavLink } from 'react-router-dom'

import './LandingNav.css'

const LandingNav = () => {
  return (
    <div className="nav-bar">
      <NavLink to='/about' className='landing-nav'>About</NavLink>
      <NavLink to='/contact' className='landing-nav'>Contact</NavLink>
      <NavLink to='/portfolio' className='landing-nav'>Portfolio</NavLink>
    </div>
  )
}

export default LandingNav
