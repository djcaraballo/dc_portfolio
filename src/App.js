import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/about' className='nav'>About</NavLink>
          <NavLink to='/contact' className='nav'>Contact</NavLink>
          <NavLink to='/portfolio' className='nav'>Portfolio</NavLink>
        </header>
        <body>
          <h1 className="my-name">Dina Caraballo</h1>
          <h3 className="my-title">SOFTWARE ENGINEER</h3>
          <h3 className="coming-soon">Coming soon!</h3>
        </body>
      </div>
    );
  }
}

export default App
