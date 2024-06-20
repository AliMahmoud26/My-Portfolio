import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import Memory from '../../public/gallery/memory2.avif'
import TicTacToe from '../../public/gallery/tictactoe.jpeg'
import Wordle from '../../public/gallery/wordle.png'

const Games = () => {
  return (
    <section className='games'>
      <h1 className='main-heading'>HAVE SOME FUN</h1>
      <h2 className='title'>Don't take everything seriously and have some fun!</h2>
      <div className="container">
        <div className="games-container">
          <div className="game">
            <div className="img">
              <img src={Memory} alt="Memory game" />
            </div>
            <div className="content">
              <h2>Memory Game</h2>
              <div className="icons">
                <span>Click here to start playing</span>
                <a href="#" target='_blank' title='Live Site'><MdArrowOutward /></a>
                {/* <a href="https://github.com/AliMahmoud26/GymFit-Landing-Page" target='_blank' title='Github Repo'><FaGithub /></a> */}
              </div>
            </div>
          </div>
          <div className="game">
            <div className="img">
              <img src={TicTacToe} alt="Tic tac toe game" />
            </div>
            <div className="content">
              <h2>Tic Tac Toe Game</h2>
              <div className="icons">
                <span>Click here to start playing</span>
                <a href="#" target='_blank' title='Live Site'><MdArrowOutward /></a>
                {/* <a href="https://github.com/AliMahmoud26/Baguettes--store" target='_blank' title='Github Repo'><FaGithub /></a> */}
              </div>
            </div>
          </div>
          <div className="game">
            <div className="img">
              <img src={Wordle} alt="Wordle game" />
            </div>
            <div className="content">
              <h2>Wordle Game</h2>
              <div className="icons">
                <span>Click here to start playing</span>
                <a href="#" target='_blank' title='Live Site'><MdArrowOutward /></a>
                {/* <a href="https://github.com/AliMahmoud26/Baguettes--store" target='_blank' title='Github Repo'><FaGithub /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games