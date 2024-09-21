import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
// import GymFit from '../../public/gallery/Project1.jpeg'
import Bakery from '../../public/gallery/Project2.jpg'
// import RealState from '../../public/gallery/realstate2.jpg'
import eCommerce from '../../public/gallery/ecommerce5.jpg'
import LittleLemon from '../../public/gallery/littleLemon4.jpeg'
import Dashboard from '../../public/gallery/dashboard2.jpg'
// import SouthEgypt from '../../src/assets/south.jpeg'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className='main-heading'>RECENT WORK</h1>
      <h2 className='title'>Here are some of my favorite projects I have done lately. Feel free to check them out.</h2>
      <div className="container">
        <div className="projects-container">
          {/* <div className="project">
            <div className="img">
              <img src={GymFit} alt="Project1" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>React JS & Sass</span>
              <h2>GymFit Website</h2>
              <div className="icons">
                <a href="https://main--gymfitsite.netlify.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/GymFit-Landing-Page" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
              <span className='important'>Note: This repo is just to show that i know how to write React code and it will be removed and replaced with better projects. Thanks for your understanding.</span>
            </div>
          </div> */}
          <div className="project bakery">
            <div className="img">
              <img src={Bakery} alt="Project2" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>Html, Css & JavaScript</span>
              <h2>Bakery Shop</h2>
              <div className="icons">
                <a href="https://main--freshbaguettes.netlify.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/Baguettes--store" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="project restaurant">
            <div className="img">
              <img src={LittleLemon} alt="Project1" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>React JS & Sass</span>
              <span className='tech-used'>Meta Frontend Capstone Project</span>
              <h2>Little Lemon Restaurant</h2>
              <div className="icons">
                <a href="https://little-lemon-silk.vercel.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/Meta-Frontend-Capstone-Project" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="project ecommerce">
            <div className="img">
              <img src={eCommerce} alt="Project4" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>Full MERN STACK</span>
              <span className='tech-used' style={{color: 'aqua', fontWeight:'bold'}}> under development...</span>
              <h2>e-Commerce Application</h2>
              <div className="icons">
                <a href="https://mallmarkt.vercel.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/eCommerce-Website-Using-MERN-Stack/" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="project dashboard">
            <div className="img">
              <img src={Dashboard} alt="Project4" />
            </div>
            <div className="content">
              <span>DASHBOARD APPLICATION</span>
              <span className='tech-used'>NEXT JS & TAILWIND</span>
              <span className='tech-used' style={{color: 'aqua', fontWeight:'bold'}}> under development...</span>
              <h2>MallMarkt Control Panel</h2>
              <div className="icons">
                <a href="https://mallmarkt-control-panel.vercel.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/Apps-Square-Final-Project" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects