import React from 'react'
import { NavLink } from 'react-router-dom'

import './PageNav.css'

const PageNav = () => {
  return (
    <div className="nav-bar">
      <NavLink to='/about' className='nav'>About</NavLink>
      <NavLink to='/contact' className='nav'>Contact</NavLink>
      <NavLink to='/portfolio' className='nav'>Portfolio</NavLink>
      <NavLink to='/' className='nav'>Home</NavLink>
    </div>
  )
}

export default PageNav
