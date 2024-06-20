import React from 'react'

const Timeline = () => {
  return (
    <section className='expertise' id='expertise'>
      <h1 className="main-heading">EXPERTISE</h1>
      <div className="container">
        <div className="experience main-timeline">
          <h4>EXPERIENCE</h4>
          <div className="experience-timeline timeline">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            <h2>Web Development</h2>
            <h3>FRONTEND DEVELOPER</h3>
            <span className="date">JULY 2022 - STARTED</span>
            <p>At this time I started to learn Frontend development and during this journey, I've learned and passed through many things as well, I've gained considerable experience in this field by applying what I've learned to real projects which you find on my Github account.</p>
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
          <p>I joined the Higher Institute Of Management And Information Technology of Kafr El-Sheikh on the 1st of October 2021 and I'll be graduating in June 2025.</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline