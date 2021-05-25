import React from 'react'
import magnifyglass from '../../../../imgs/scavenger-badge@4x.png'
import CompetitionForm from './CompetitionForm'
import LenovoLogo from '../../../../imgs/lenovo.svg'

const SubmitModule = (props) => {
  const animationClass = props.animationClass
  const show = props.show
  const isScavengerHungComplete = props.isScavengerHungComplete

  return (
    <div className={`submit-module pl-30 pr-5 vertical-align-module ${show ? animationClass.in : animationClass.out}`}>
      <div className="header text-center">
        <img src={magnifyglass} className="magnify-glass" alt="small magnifying glass" />
        <h2 className="right-rotate-4 red-box px-1">{ isScavengerHungComplete ? 'Congratulations!' : 'Not quite!'}</h2>
        <h3 className="blue-box right-rotate-4 py-1 px-2">{ isScavengerHungComplete ? 'You found all the bugs!!' : 'Don’t bug out, you’ll get it!'}</h3>
      </div>
      <div className="dusty-blue-box drop-shadow-navy pt-5 pb-1 px-3 mx-auto mt-minus-5">
        <div className={`${isScavengerHungComplete ? '' : 'disabled'}`}></div>
        <CompetitionForm />
      </div>
      <div className="partnership mx-auto"><h4>In partnership with <img className="lenovo-logo" src={LenovoLogo} alt="lenovo logo"/></h4></div>

    </div>
  )
}

export default SubmitModule
