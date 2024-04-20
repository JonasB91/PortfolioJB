import React from 'react'
import '../Css/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
    <div className='ring'>
    <i style={{ '--clr': '#00ff0a' }}></i>
    <i style={{ '--clr': '#ff0057' }}></i>
    <i style={{ '--clr': '#fffd44' }}></i>
        <div className='headline'>Hi, I'm Jonas</div>
      </div>
    </div>
  )
}

export default Hero