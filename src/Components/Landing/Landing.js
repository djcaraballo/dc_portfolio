import React from 'react'
import './Landing.css'
import LandingNav from '../LandingNav/LandingNav'
import ScriptLogo from '../Svg/ScriptLogo'
import SansLogo from '../Svg/SansLogo'

const Landing = () => {
  return (
    <div>
      // <h1 className="my-name">Dina Caraballo</h1>
      <SansLogo />
      <ScriptLogo />
      <h3 className="my-title">SOFTWARE ENGINEER</h3>
      <LandingNav />
    </div>
  )
}

export default Landing
