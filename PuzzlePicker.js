import React from 'react'
import medtech from '../imgs/medtech-badge@4x.png'
import scavenger from '../imgs/scavenger-badge@4x.png'
import wild from '../imgs/into-the-wild@4x.png'
import adventure from '../imgs/adventure@4x.png'
import music from '../imgs/music@4x.png'
import magic from '../imgs/magic@4x.png'
import game from '../imgs/game@4x.png'
import lock from '../imgs/lock-icon.svg'
import { Link } from 'react-router-dom'

const PuzzlePicker = (props) => {
  const supportModalOpen = props.handleSupportModalOpen

  const handleSupportModalOpen = () => {
    supportModalOpen()
  }

  const handleSupportModalOpenKey = () => {
    if (event.keyCode === 13) {
      supportModalOpen()
    }
  }

  return (
    <div className="container">

      <div className="puzzle-picker-relative">

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="medtech-badge locked clickable">
          <img src={medtech} className="medtech-bg" alt="Head, Shoulders, Knees and Code Badge" />
          <img src={lock} className="lock" alt="lock" />
        </div>

        <div className="scavenger-badge">
          <Link to='puzzles/scavenger-hunt'>
            <img src={scavenger} className="scavenger-hunt-bg floating" alt="Scavenger Hunt Badge" />
          </Link>
        </div>

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="wild-badge locked clickable">
          <img src={wild} className="wild-bg" alt="Into the wild" />
          <img src={lock} className="lock" alt="lock" />
        </div>

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="music-badge locked clickable">
          <img src={music} className="music-bg" alt="Music and memory" />
          <img src={lock} className="lock" alt="lock" />
        </div>

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="adventure-badge locked clickable">
          <img src={adventure} className="adventure-bg" alt="Code your own adventure" />
          <img src={lock} className="lock" alt="lock" />
        </div>

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="magic-badge locked clickable">
          <img src={magic} className="magic-bg" alt="Magic and mischief" />
          <img src={lock} className="lock" alt="lock" />
        </div>

        <div onClick={handleSupportModalOpen} onKeyUp={handleSupportModalOpenKey} role='button' tabIndex={0} className="game-badge locked clickable">
          <img src={game} className="game-bg" alt="Game changers" />
          <img src={lock} className="lock" alt="lock" />
        </div>

      </div>

    </div>

  )
}

export default PuzzlePicker
