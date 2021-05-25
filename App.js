import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'
import PuzzlePicker from './PuzzlePicker'
import Navigation from './Navigation/Navigation'
import HintButton from './HintButton'
import ScavengerHunt from './puzzles/ScavengerHunt/ScavengerHunt'
import RotateImg from '../imgs/rotate-img@4x.png'

const App = () => {
  const [showHint, setShowHint] = useState(false)
  const [hintContent, setHintContent] = useState(null)

  const handleShowHint = () => {
    setShowHint(true)
  }

  const handleHideHint = () => {
    setShowHint(false)
  }

  const handleSetHintContent = (content) => {
    setHintContent(content)
  }

  const [showSupport, setShowSupport] = useState(false)

  const handleSupportModalOpen = () => {
    setShowSupport(true)
  }

  const handleSupportModalClose = () => {
    setShowSupport(false)
  }

  // bug input state
  const DEFAULT_INPUT_VALUE = 'https://'
  const [bugInputValues, setBugInputValues] = useState({
    // hunt1Select1: DEFAULT_INPUT_VALUE,
    fly: DEFAULT_INPUT_VALUE,
    dragonfly: DEFAULT_INPUT_VALUE,
    butterfly: DEFAULT_INPUT_VALUE,
    red: DEFAULT_INPUT_VALUE,
    beetle: DEFAULT_INPUT_VALUE
  })
  const handleSetButInputValues = (bugId, value) => {
    const newBugInputValues = { ...bugInputValues, [bugId]: value }
    setBugInputValues(newBugInputValues)
  }

  return (
    <div className='tech-puzzles-container'>
      <Switch>
        <Route path="/" exact>
          <Splash />
        </Route>
        <Route path='/'>
          <Navigation
            handleSupportModalOpen={handleSupportModalOpen}
            showSupport={showSupport}
            handleSupportModalClose={handleSupportModalClose}
          />
          { showHint && <HintButton content={hintContent} /> }
          <Route path="/puzzles" exact>
            <PuzzlePicker
              handleSupportModalOpen={handleSupportModalOpen}
            />
          </Route>
          <Route path="/puzzles/scavenger-hunt">
            <ScavengerHunt
              setHintContent={handleSetHintContent}
              showHint={handleShowHint}
              hideHint={handleHideHint}
              handleSetButInputValues={handleSetButInputValues}
              bugInputValues={bugInputValues}
            />
          </Route>
        </Route>

      </Switch>
      {/* <div className="portrait">
        <img className="rotate-image" src={RotateImg} alt="please rotate your device" />
      </div> */}
    </div>
  )
}

export default App
