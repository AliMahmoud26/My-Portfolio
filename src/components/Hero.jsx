import React from 'react'
import Img from '../assets/MyImg1.jpg';
import CV from '../assets/Alis CV.pdf';
import { FaDownload } from 'react-icons/fa';
// import { MdOutlineWavingHand, MdWavingHand } from 'react-icons/md';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="my-info">
          <div className="text">
            <span className="position">Software Developer</span><br />
            {/* <MdOutlineWavingHand className='hand-icon' /> */}
            <span className='name'>Hello I'm</span><br />
            <span className='name'>Ali Mahmoud</span><br />
            <p className="info">Dedicated full-stack developer with expertise in HTML5, CSS3, JavaScript, React.js, TypeScript, Node.js, Express, and MongoDB. Seeking opportunities to contribute to impactful web projects and collaborate within dynamic teams to further enhance proficiency in frontend development and emerging technologies.</p>
          </div>
          <div className="img">
            <img src={Img} alt="Hero Image" />
          </div>
        </div>
        <div className="btn">
          <a href={CV} target='_blank'>DOWNLOAD CV <FaDownload /></a>
        </div>
      {/* <div className="socials">
          <a href="https://github.com/AliMahmoud26" target='_blank' title='Github Account'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ali-mahmoud-b94668226/" target='_blank' title='Linkedin Account'><FaLinkedin /></a>
          <a href="https://www.frontendmentor.io/profile/AliMahmoud21" target='_blank' title='Frontend Mentor Account'><FaArrowsTurnRight /></a>
      </div> */}
    </section>
  )
}

export default Hero