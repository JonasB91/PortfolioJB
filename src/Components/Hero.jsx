import React from 'react'
import '../Css/Hero.css'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  //Check if screen size is big or not
  const isBigScreen = () => window.innerWidth > 991;

  return (
    <div className='hero-container'>
    <div className='ring'>
    <i style={{ '--clr': '#00ff0a' }}></i>
    <i style={{ '--clr': '#ff0057' }}></i>
    <i style={{ '--clr': '#fffd44' }}></i>
      <div className='headline'>
      <span style={{ color: 'orange', fontSize: '2em' }}>Hello</span><br />
        {isBigScreen() ? (
        <TypeAnimation
        sequence={[
          "I'm Jonas",
          1000,
          "A front-end developer",
          2000,
          'Looking for a new career',
          2000,
          'Get to know me',
          2000
        ]}
        wrapper='span'
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block'}}
        repeat={Infinity}
        />
      ) : (
        <>
          <span>I'm Jonas</span><br />
          <span>A Front-end Developer</span>
        </>
      )}
      </div>
      </div>
    </div>
  )
}

export default Hero