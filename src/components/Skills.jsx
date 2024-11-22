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
            <p>Sass/Scss</p>
            <p>Tailwind CSS & Bootstrap5</p>
            <p>TypeScript</p>
            <p>React.JS</p>
            <p>Next.JS</p>
            {/* <p>Figma, Vite & Framer Motion</p> */}
          </div>
        </div>
        <div className="card-details backend">
          <h2>BACKEND</h2>
          <div className="tech-skills">
            <p>Node Js</p>
            <p>Express Js</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="card-details other">
          <h2>SOFT SKILLS</h2>
          <div className="tech-skills">
            <p>Effective Communication </p>
            <p>Teamwork & Collaboration</p>
            <p>Patience and Perseverance</p>
            <p>Fast Learner</p>
            <p>Problem-Solving</p>
            <p>Adaptability</p>
            <p>Responsibility</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills