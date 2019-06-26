import React from 'react'
import './Landing.css'
import LandingNav from '../LandingNav/LandingNav'

const Landing = () => {
  return (
    <div>
      {/*<h1 className="my-name">Dina Caraballo</h1>*/}
      <svg viewBox="0 0 800 600">
        <symbol id="s-text">
          <text text-anchor="middle"
            x="50%"
            y="35%"
            class="text--line"
          >
          Dina
          </text>
          <text text-anchor="middle"
            x="50%"
            y="68%"
            class="text--line2"
          >
          Caraballo
          </text>
        </symbol>
        <g class="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
      <h3 className="my-title">SOFTWARE ENGINEER</h3>
      <LandingNav />
    </div>
  )
}

export default Landing
