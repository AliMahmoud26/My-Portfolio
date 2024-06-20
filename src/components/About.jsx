import React from 'react'

const About = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="left-hero">
          <img src={MyImg} alt="My Image" />
        </div>
        <div className="right-hero">
          <h2>About</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus voluptatum rem consectetur sapiente libero facilis eius placeat similique sint eveniet repellat, optio suscipit ab distinctio, voluptatem fugit, molestiae eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias, illum eius consequuntur, ea fugit ipsa ad officiis accusantium incidunt qui officia. Assumenda alias dolor numquam nulla, error debitis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum libero magni aperiam? Itaque praesentium velit ratione veritatis distinctio dignissimos odio, possimus, quas eius iure quod sunt, omnis veniam molestias.</p>
          <a href={MyCV} target='_blank'>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default About