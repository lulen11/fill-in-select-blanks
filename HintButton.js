import React, { useState } from 'react'
import Modal from './common/Modal'
import hintImage from '../imgs/hint-button@4x.png'

const HintButton = (props) => {
  const content = props.content
  const [showHint, setShowHint] = useState(false)

  const handleHintClose = () => {
    setShowHint(false)
  }
  const handleHintOpen = () => {
    setShowHint(true)
  }

  return (
    <>
      <button className="hint-button clickable" onClick={handleHintOpen}>
        <img src={hintImage} className="hint-image" alt="click me for a hint!" />
      </button>
      {
        showHint && <Modal handleClose={handleHintClose} styles={{
          bgColor: 'bg-pink-blue-text',
          closeButtonStyle: 'bg-red',
          borderStyle: 'blue-border-lg'
        }}>
          {content}
        </Modal>
      }
    </>
  )
}

export default HintButton
