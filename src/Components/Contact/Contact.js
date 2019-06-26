import React from 'react'
import './Contact.css'
import PageNav from '../PageNav/PageNav'

const Contact = () => {
  return (
    <div>
      <PageNav />
      <h1>Contact</h1>
      <div className="contact-container">
        <a href="mailto:dcaraballo26@gmail.com" className="contact"><i className="fas fa-envelope-square"></i>Email me!</a>
        <a href="https://twitter.com/DinaCaraballo" className="contact"><i className="fab fa-twitter-square"></i>@DinaCaraballo</a>
        <a href="https://www.linkedin.com/in/dina-caraballo/" className="contact"><i className="fab fa-linkedin"></i>LinkedIn.com/in/Dina-Caraballo</a>
        <a href="https://github.com/djcaraballo" className="contact"><i className="fab fa-github"></i>Github.com/djcaraballo</a>
      </div>
    </div>
  )
}

export default Contact
