import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Landing from './Components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/home' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </div>
    );
  }
}

export default App
