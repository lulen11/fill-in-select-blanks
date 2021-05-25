import React from 'react'
import magnifyglass from '../../../../imgs/scavenger-badge@4x.png'

const IntroModule = (props) => {
  const animationClass = props.animationClass
  const show = props.show

  return (
    <div className={`intro pl-30 pr-5 vertical-align-module ${show ? animationClass.in : animationClass.out}`}>
      <div className="header text-center">
        <img src={magnifyglass} className="magnify-glass" alt="small magnifying glass" />
        <h3 className="left-rotate welcome hot-pink-box px-1 ml-5">Welcome to the</h3>
        <h2 className="blue-box left-rotate white-border py-1 px-2 ml-5">SCHOOL HOLIDAY</h2>
        <h3 className="left-rotate competition hot-pink-box px-1 ml-5">Competition</h3>
      </div>
      <div className="dusty-blue-box drop-shadow-navy pt-5 pb-1 px-3 mx-auto w-65 mt-minus-5">
        <p>Code Like a Girl has partnered up with IAG to bring you our next School Holiday Puzzle. To play along, you’ll need to complete the clues to guess each of the three notable women in STEM. </p>
        <p>Using the magnifying glass to reveal clues, complete each of the dropdowns in the character description. Once you’ve completed each character description, you’ll have enough information to guess the woman’s name.</p>
      </div>
    </div>
  )
}

export default IntroModule
