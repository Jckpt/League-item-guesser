import React from 'react'
import GameInput from './GameInput'
import ItemIcon from './ItemIcon'
function Hero() {
  return (
    <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center mh-100'>
        <ItemIcon/>
        <GameInput/>
    </div>
  )
}

export default Hero