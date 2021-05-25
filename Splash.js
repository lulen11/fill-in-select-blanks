import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/logox2.png'

const Splash = () => {
  const [showEnter, setShowEnter] = useState(false)

  const SPLASH_TIMEOUT_IN_SECONDS = 1.5

  setTimeout(() => {
    setShowEnter(true)
  }, SPLASH_TIMEOUT_IN_SECONDS * 1000)

  return (
    <div className="home-bg">
      <div className="vertical-container">
        <div className="text-center vertical-align absolute-center">
          <img src={logo} width="250" alt="Code Like a Girl Logo" />
          <h1>Notable Women<br/>in STEM<br/><span className="red-box pink-border-sm right-rotate-4 m-font px-1">School Holiday Challenge</span></h1>
          {
            <div className="floating">
              <Link className={`${showEnter ? 'text-pink' : 'text-white'}`} to="/puzzles/scavenger-hunt">Enter</Link>
            </div>
          }
          {
            !showEnter && <>
              <span className="circle light">
                <svg height="60" width="60">
                  <circle cx="30" cy="30" r="20" strokeWidth="10" fill="transparent" />
                </svg>
              </span>
              <span className="progress">
                <svg height="60" width="60">
                  <circle cx="30" cy="30" r="20" strokeWidth="10" fill="transparent" />
                </svg>
              </span>
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default Splash
