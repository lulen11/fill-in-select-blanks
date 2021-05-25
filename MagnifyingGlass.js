import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { collision } from '../../../../utils/htmlElements'
import flyBig from '../../../../imgs/bug-fly-anu.svg'
import butterflyBig from '../../../../imgs/bug-butterfly-rb.svg'
import redBig from '../../../../imgs/bug-red-lenovo.svg'
// import dragonflyBig from '../../../../imgs/bug-dragonfly-envato.svg'
// import beetleBig from '../../../../imgs/bug-beetle-aeg.svg'

const MagnifyingGlass = (props) => {
  const [bugEls, setBugEls] = useState([])
  const [magnifierEl] = useState(document.createElement('div'))
  const zoom = props.zoom

  const bugImageMap = {
    'bug-fly-img': flyBig,
    'bug-butterfly-img': butterflyBig,
    'bug-red-img': redBig,
    // 'bug-dragonfly-img': dragonflyBig,
    // 'bug-beetle-img': beetleBig
  }

  let magnifyingGlassEl

  useEffect(() => {
    magnifierEl.classList.add('magnifier')
    magnifierEl.setAttribute('id', 'magnifier')
    magnifyingGlassEl = document.getElementById('magnifyingGlass')
    magnifyingGlassEl.appendChild(magnifierEl)
    setBugEls(Object.keys(bugImageMap).map(bugId => document.getElementById(`${bugId}`)))

    bugEls.forEach(bugEl => {
      bugEl.style.top = bugEl.offsetTop
      bugEl.style.bottom = bugEl.offsetBottom
      bugEl.style.left = bugEl.offsetLeft
      bugEl.style.right = bugEl.offsetRight
      bugEl.style.width = '15.5rem'
      bugEl.style.height = '15.5rem'
    })
  }, [])

  const handleDrag = () => {
    bugEls.forEach(bugEl => {
      const hit = collision.circles(magnifierEl, bugEl)

      if (hit) {
        bugEl.classList.add('bug-mag-active')
        const bugRect = bugEl.getBoundingClientRect()
        const magRect = magnifierEl.getBoundingClientRect()

        magnifierEl.style.backgroundImage = `url(${bugImageMap[bugEl.id]})`
        magnifierEl.style.backgroundSize = `${bugRect.width * zoom}px ${bugRect.height * zoom}px`
        magnifierEl.style.backgroundRepeat = 'no-repeat'
        const borderWidth = 10
        const w = bugRect.width + magRect.width
        const h = bugRect.height

        let x = bugRect.left - magRect.left
        let y = bugRect.top - magRect.top
        x = x - window.pageXOffset
        y = y - window.pageYOffset

        magnifierEl.style.backgroundPosition = ((x * zoom) - w + borderWidth) + 'px ' + ((y * zoom) - h + borderWidth) + 'px'
      } else {
        if (bugEl.classList.contains('bug-mag-active')) {
          bugEl.classList.remove('bug-mag-active')
          magnifierEl.style.backgroundImage = 'none'
        }
      }
    })
  }

  return (
    <div>
      <div className="drag-me-bg"></div>
      <Draggable onDrag={handleDrag}>
        <div
          id='magnifyingGlass'
          className='draggable-magnifying-glass clickable'
        />
      </Draggable>
    </div>
  )
}

export default MagnifyingGlass
