import React from 'react'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <h1 className='main-heading'>SKILLS</h1>
      <div className="container">
        <div className="card-details frontend">
          <h2>FRONTEND</h2>
          <div className="tech-skills">
            <p>HTML5 & CSS3</p>
            <p>Javascript & ES6</p>
            <p>TypeScript</p>
            <p>React JS</p>
            <p>Sass</p>
            <p>Bootstrap5</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="card-details backend">
          <h2>BACKEND</h2>
          <div className="tech-skills">
            <p>Node Js</p>
            <p>Express Js</p>
            <p>Mongo DB</p>
          </div>
        </div>
        <div className="card-details other">
          <h2>OTHER</h2>
          <div className="tech-skills">
            <p>Figma</p>
            <p>Framer Motion</p>
            <p>Vite</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills