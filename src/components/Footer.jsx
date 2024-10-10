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
            <a href="mailto:alimahmoud.cs@outlook.com" style={{marginRight: "1.35rem"}}>Outlook</a>
            <a href="mailto:alimah.engineer@gmail.com">Gmail</a>
          </div>
          <div className="page-links">
            <h4>Page Links</h4>
            <div className="links">
              <a href="#">Home</a>
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
              <a href="https://leetcode.com/u/Ali_Mahmoud10/" target='_blank'>LeetCode</a>
            </div>
          </div>
          <div className="email-box">
            <a href="mailto:alimahmoud.cs@outlook.com" title='Outlook'>SAY HELLO.</a>
          </div>
        </div>
      </div>
      <p className='right'>Copyright &copy; Ali Mahmoud 2024, All Rights Reserved</p>
    </footer>
  )
}

export default Footer