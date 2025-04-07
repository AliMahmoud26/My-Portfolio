import React from 'react'
import Img from '../assets/MyImg1.jpg';
import CV from '../assets/Academic Resume.pdf';
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
            <p className="info">I’m a Passionate frontend developer skilled in building dynamic, user-friendly web applications using React and 
            Next.js. I aim to leverage my technical expertise and creative problem-solving abilities to build scalable, 
            responsive applications that enhance user experience. Looking for opportunities to further develop my skills, 
            contribute to impactful projects, and grow within collaboratives and forward-thinking teams.</p>
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