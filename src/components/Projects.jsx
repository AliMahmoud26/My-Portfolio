import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import GymFit from '../../public/gallery/Project1.jpeg'
import Bakery from '../../public/gallery/Project2.jpg'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className='main-heading'>RECENT WORKS</h1>
      <h2 className='title'>Here are some of my favorite projects I have done lately. Feel free to check them out.</h2>
      <div className="container">
        <div className="projects-container">
          <div className="project">
            <div className="img">
              <img src={GymFit} alt="Project1" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <h2>GymFit Website</h2>
              <div className="icons">
                <a href="https://main--gymfitsite.netlify.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/GymFit-Landing-Page" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="img">
              <img src={Bakery} alt="Project2" />
            </div>
            <div className="content">
              <span>WEBSITE</span>
              <h2>Bakery Shop</h2>
              <div className="icons">
                <a href="https://main--freshbaguettes.netlify.app/" target='_blank' title='Live Site'><MdArrowOutward /></a>
                <a href="https://github.com/AliMahmoud26/Baguettes--store" target='_blank' title='Github Repo'><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects