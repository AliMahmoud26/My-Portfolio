import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import GymFit from '../../public/gallery/Project1.jpeg'
import Bakery from '../../public/gallery/Project2.jpg'
import RealState from '../../public/gallery/realstate2.jpg'
import eCommerce from '../../public/gallery/ecommerce5.jpg'
import SouthEgypt from '../../src/assets/south.jpeg'

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
          {/* <div className="project">
            <div className="img">
              <img src={SouthEgypt} alt="Project1" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>MERN STACK Technologies</span>
              <h2>South Egypt Travels</h2>
              <div className="icons">
                <a href="https://github.com/AliMahmoud26/South-Egypt-Travels" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div> */}
          <div className="project">
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
          <div className="project">
            <div className="img">
              <img src={eCommerce} alt="Project4" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>Full MERN STACK</span>
              <span className='tech-used' style={{color: 'aqua', fontWeight:'bold'}}>still under development...</span>
              <h2>e-Commerce Application</h2>
              <div className="icons">
                <a href="https://mallmarkt.vercel.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/eCommerce-Website-Using-MERN-Stack/" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="img">
              <img src={RealState} alt="Project4" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <span className='tech-used'>Full MERN STACK</span>
              <span className='tech-used' style={{color: 'aqua', fontWeight:'bold'}}>still under development...</span>
              <h2>Real State Application</h2>
              <div className="icons">
                <a href="https://realtor-zeta-ivory.vercel.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/Real-State-Application" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects