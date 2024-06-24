import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className="container">
        <div className="reach-me">
        <h4>GET IN TOUCH</h4>
        <h1>I love to hear from you. Whether you have a question or just want to chat about design & tech — shoot me a message.</h1>
        </div>
        <div className="other-links">
          <div className="email">
            <h4>REACH ME AT</h4>
            <a href="mailto:AliMahmoudHelal26@gmail.com">Send Me an Email</a>
          </div>
          <div className="page-links">
            <h4>Page Links</h4>
            <div className="links">
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#expertise">Expertise</a>
              <a href="#projects">Projects</a>
            </div>
          </div>
          <div className="socials">
            <h4>Social</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ali-mahmoud-b94668226/" target='_blank'>Linkedin</a>
              <a href="https://github.com/AliMahmoud26" target='_blank'>Github</a>
              <a href="https://www.frontendmentor.io/profile/AliMahmoud21" target='_blank'>Frontend Mentor</a>
            </div>
          </div>
          <div className="email-box">
            <a href="mailto:AliMahmoudHelal26@gmail.com">SAY HELLO.</a>
          </div>
        </div>
      </div>
      <p className='right'>&copy;Copyright Ali Mahmoud 2024, All Rights Reserved</p>
    </footer>
  )
}

export default Footer