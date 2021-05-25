import React from 'react'
import Ascii from '../imgs/ascii-bug.png'

const HintPageOne = () => {
  return (
    <div className="px-5 pb-2 text-center hint-modal">
      <h2>Hint!</h2>
      <div>
        <h3>Looking through the magnifier</h3>
        <div className="text-left">
          <div className="left-column">
            <p>
          Behind every website is a series of numbers, letters and symbols. These characters are put together using a “syntax” or coding language that generates the websites we use every day.
              <br/><br/>
          To see the code behind any webpage, right-click on the page and select “view source” in the drop-down menu.
              <br/><br/>
          Some businesses have a few websites. So if you’re having trouble finding the bug in their main pages, try looking at another of their sites. Use the magnify glass to check for more than just a hidden logo...
            </p>

          </div>
          <div className="right-column">
            <p><strong>Keep your eyes peeled for code that looks like... </strong></p>
            <img className="ascii pink-border-sm" src={Ascii} width="100%" alt="ascii-art" />
          </div>
        </div>
      </div>

    </div>
  )
}

const MagnifierHint = () => {
  return (
    <HintPageOne />
  )
}

export default MagnifierHint
