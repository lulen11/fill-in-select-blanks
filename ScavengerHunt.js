import React, { useState } from 'react'
import Carousel from '../../common/Carousel'
// import IntroModule from './modules/IntroModule'
import MagnifyModule from './modules/MagnifyModule'
import SubmitModule from './modules/SubmitModule'
import { d } from '../../../utils/urls'

const ScavengerHunt = (props) => {
  const showHint = props.showHint
  const hideHint = props.hideHint
  const setHintContent = props.setHintContent
  const bugInputValues = props.bugInputValues
  const handleSetButInputValues = props.handleSetButInputValues

  const [isScavengerHungComplete, setIsScavengerHungComplete] = useState(false)

  const theAnswers = {
    hunt1Select1: 'May',
    red: 'YUhSMGNITTZMeTlzWldkcGIyNHViR1Z1YjNadkxtTnZiUT09P0x3PT0=',
    dragonfly: 'YUhSMGNITTZMeTkzWldKMWFXeGtMbVZ1ZG1GMGJ5NWpiMjA9P0x3PT0=',
    butterfly: 'YUhSMGNITTZMeTkzZDNjdWNtVmtZblZpWW14bExtTnZiUT09P0wyRmliM1YwTDNObGJHeHBibWM9',
    fly: 'YUhSMGNITTZMeTlqWldOekxtRnVkUzVsWkhVdVlYVXY/YzNSMVpIaz0=',
    beetle: 'YUhSMGNITTZMeTlsYm5SbGNuQnlhWE5wYm1kbmFYSnNjeTVqYjIwdVlYVT0/'
  }

  // const selectAnswers = {
  //   hunt1Select1: 'May',
  // }

  const urls = {}
  const blanks = {}
  // const answers = {}
  // Object.keys(theAnswers).forEach(key => {
  //   const e = theAnswers[key]
  //   urls[key] = d(e)
  //   // answers[key] = d(e)
  // })

  return (
    <div className="scavenger-bg">
      <Carousel orderedSlides={[
        // (props) => {
        //   const animationClass = props.animationClass
        //   const show = props.show

        //   return <IntroModule animationClass={animationClass} show={show}/>
        // },
        (props) => {
          const animationClass = props.animationClass
          const show = props.show

          return <MagnifyModule
            setHintContent={setHintContent}
            showHint={showHint}
            hideHint={hideHint}
            bugInputValues={bugInputValues}
            setBugInputValues={handleSetButInputValues}
            animationClass={animationClass}
            show={show}
            urls={urls}
            blanks={blanks}
            // answers={answers}
            setIsScavengerHungComplete={setIsScavengerHungComplete}
          />
        }
        // (props) => {
        //   const animationClass = props.animationClass
        //   const show = props.show

        //   return <SubmitModule
        //     animationClass={animationClass}
        //     show={show}
        //     isScavengerHungComplete={isScavengerHungComplete}
        //   />
        // }
      ]} />
    </div>
  )
}

export default ScavengerHunt
