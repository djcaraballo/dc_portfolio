import React from 'react'
import './About.css'
import PageNav from '../PageNav/PageNav'

const About = () => {
  return (
    <div>
      <PageNav />
      <h1>About</h1>
      <div className="about-text">
        <p>I'm a software engineer with an eye for detail, a passion for writing clean code and developing efficient user experiences and interfaces. I thrive in dynamic, collaborative environments where I can transform challenging problems with tight constraints, into elegant and tested solutions through continuous agile processes.</p>

        <p>Front end javascript libraries I work with revolve around popular implementations of the observer design pattern: Creating views through composable React components and managing state with Redux in response to actions or side effects e.g. consuming RESTful APIs or delaying code execution. In parallel with client-side development, I have been learning and working with Node, Express, Knex, PostgreSQL, GraphQL, Ruby on Rails and RESTful API creation to fill out my server-side experience.</p>

        <p>As a software engineer, I desire to positively impact the future in a meaningful and widespread way. I have a growing curiosity of 21st century educational tools and tech, designed by forward-thinking, creative professionals; as well as cryptocurrency and biotechnology. </p>
      </div>
    </div>
  )
}

export default About
