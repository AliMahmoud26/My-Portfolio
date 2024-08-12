import React from 'react'

const Timeline = () => {
  return (
    <section className='expertise' id='expertise'>
      <h1 className="main-heading">EXPERTISE</h1>
      <div className="container">
        <div className="experience main-timeline">
          <h4>EXPERIENCE</h4>
          <div className="experience-holder experience-one">
            <div className="experience-timeline timeline">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div className="content">
              <h2>Web Development</h2>
              <h3>FRONTEND DEVELOPER</h3>
              <span className="date">JULY 2022 - STARTED</span>
              <p>I started learning frontend development in 2022, and since then, I've gained knowledge in various technologies like HTML5, CSS3, JavaScript and ES6, React.js, TypeScript, Sass, Tailwind CSS, and Bootstrap 5. Additionally, I've explored backend technologies such as Node.js, Express, and MongoDB. Throughout this journey, I encountered and mastered many aspects of the field. By applying my knowledge to real projects, which you can find on my GitHub account, I have gained considerable experience.</p>
            </div>
          </div>
          <div className="experience-holder experience-two">
            <div className="experience-timeline timeline">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div className="content">
              <h2>APPS SQUARE</h2>
              <h3>FRONTEND DEVELOPER</h3>
              <span className="date">JULY 2024 - PRESENT</span>
              <p>Assisted in developing web applications using React and Next.js, focusing on dynamic and responsive UI 
                components. Collaborated with team members, participated in code reviews, and learned modern 
                development practices.</p>
            </div>
          </div>
        </div>
        <div className="education main-timeline">
          <h4>EDUCATION</h4>
        <div className="education-timeline timeline">
          <div className="circle"></div>
          <div className="line"></div>
        </div>
        <div className="content">
          <h2>HIMIT Institute</h2>
          <h3>BAs IN COMPUTER SCIENCE</h3>
          <span className="date">JOINED IN OCTOBER 2021 - GRADUATION IN JUNE 2025</span>
          <p>I enrolled in the Higher Institute of Management and Information Technology of Kafr El-Sheikh on October 2021, and I will graduate in June 2025. I have enrolled in the Computer Science Department. We have been taught many important topics in College such as Math, Physics, Data Structure and Algorithms, Object-Oriented Porgramming, System Design and Analysis, Modeling and Simulation Systems and many other things.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline