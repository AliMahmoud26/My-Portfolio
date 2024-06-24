import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavToggle = () => {
    setNavbar(!navbar)
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {window.removeEventListener('scroll', handleScroll)};
  })

  return (
    <div className={`navbar container ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <a href='#'>Ali.</a>
      </div>
      {/* <FaBars className={`nav-icon ${navbar ? (FaBars) : (FaTimes)}`} size={25} onClick={handleNavToggle} /> */}
      <div className="nav-icon" onClick={handleNavToggle}>
        {navbar ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <nav className={`${navbar ? 'show' : ''}`}>
        <a href="#">Home</a>
        {/* <a href="#hero">About</a> */}
        <a href="#skills">Skills</a>
        <a href="#expertise">Expertise</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  )
}

export default Navbar