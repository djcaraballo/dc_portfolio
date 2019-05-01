import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-bar">
      <NavLink to='/about' className='nav'>About</NavLink>
      <NavLink to='/contact' className='nav'>Contact</NavLink>
      <NavLink to='/portfolio' className='nav'>Portfolio</NavLink>
    </div>
  )
}

export default Nav
