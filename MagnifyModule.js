import React, { useEffect, useState } from 'react'
import imgSrcWomanBack1 from '../../../../imgs/woman-back1.svg'
import butterfly from '../../../../imgs/bug-butterfly-rb-sm.svg'
import imgSrcWomanBack3 from '../../../../imgs/woman-back3.svg'
import MagnifyingGlass from './MagnifyingGlass'
import MagnifierHint from '../../../MagnifierHint'

const MagnifyModule = (props) => {
  const [hasSetContent, setHasSetContent] = useState(false)

  const showHint = props.showHint
  const hideHint = props.hideHint
  const setHintContent = props.setHintContent
  const animationClass = props.animationClass
  const show = props.show
  const urls = props.urls
  const blanks = props.blanks
  const setIsScavengerHungComplete = props.setIsScavengerHungComplete

  const bugInputValues = props.bugInputValues
  const setBugInputValues = props.setBugInputValues

  const handleBugInput = bugId => e => {
    /* speak to Matt about this */
    ga('send', 'event', 'Scavenger Hunt', bugId, e.target.value)
    setBugInputValues(bugId, e.target.value)
  }

  useEffect(() => {
    showHint()
    if (!hasSetContent) {
      setHintContent(MagnifierHint)
      setHasSetContent(true)
    }

    return () => {
      hideHint()
    }
  }, [showHint, hideHint, setHasSetContent, hasSetContent, setHintContent])

  // const isHunt1Select1Matched = urls.hunt1Select1 === bugInputValues.hunt1Select1

  // const isSelect1Matched = urls.hunt1Select1 === bugInputValues.hunt1Select1

  const isFlyMatched = urls.fly === bugInputValues.fly
  const isButterflyMatched = urls.butterfly === bugInputValues.butterfly
  const isRedMatched = urls.red === bugInputValues.red
  const isDragonflyMatched = urls.dragonfly === bugInputValues.dragonfly
  const isBeetleMatched = urls.beetle === bugInputValues.beetle
  setIsScavengerHungComplete(isFlyMatched && isButterflyMatched && isRedMatched && isDragonflyMatched && isBeetleMatched)
  // setIsHunt1Complete(isHunt1Select1Matched)

  const isBlank1Matched = blanks.blank1 === bugInputValues.blank1


  return (

    <div className={`magnify px-8 vertical-align-module ${show ? animationClass.in : animationClass.out}`}>
      
      

      <div className="hunt-container">
        <div className="scavenger-item fly text-center hunt1Select1">
          <div id='bug-fly' className={`bug-circle vertical-container mb-1 ${isFlyMatched ? 'success' : ''}`}>
            <img id='bug-fly-img' src={imgSrcWomanBack1} alt="Back of the  first notable woman" />
          </div>
          <div className="fill-blanks">


            <p>
              I was born in&nbsp;
              {/* <input type="text" onChange={handleBugInput('hunt1Select1')} value={bugInputValues.hunt1Select1}></input> */}
              <select name="hunt1-year" onChange={handleBugInput('blank1')} > 
                <option value="{bugInputValues.blank1}"></option>
                <option value="1930">1930</option>
                <option value="1940">1940</option>
                <option value="1950">1950</option>
              </select>

              &nbsp;1933. I was one of the first African-American women to work at&nbsp;
              <input className="p-05" type="text" onChange={handleBugInput('fly')} value={bugInputValues.fly}></input>
              &nbsp;. 
              </p>
          </div>
        </div>

        <div className="scavenger-item butterfly text-center">
          <div id='bug-butterfly' className={`bug-circle vertical-container mb-1 ${isButterflyMatched ? 'success' : ''}`}>
            <img id='bug-butterfly-img' src={butterfly} className="vertical-align absolute-center" alt="Butterfly" />
          </div>
          <input className="p-05" type="text" onChange={handleBugInput('butterfly')} value={bugInputValues.butterfly}></input>
        </div>

        <div className="scavenger-item red-bug text-center">
          <div id='bug-red' className={`bug-circle vertical-container mb-1 ${isRedMatched ? 'success' : ''}`}>
            <img id='bug-red-img' src={imgSrcWomanBack3} alt="Back of the  first notable woman" />
          </div>
          <input className="p-05" type="text" onChange={handleBugInput('red')} value={bugInputValues.red}></input>
        </div>
      </div>
      <MagnifyingGlass zoom={6} />
    </div>

  )
}

export default MagnifyModule
