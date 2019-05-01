import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './App.css'
import Nav from './Components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="my-name">Dina Caraballo</h1>
        <h3 className="my-title">SOFTWARE ENGINEER</h3>
        <Nav />
      </div>
    );
  }
}

export default App
