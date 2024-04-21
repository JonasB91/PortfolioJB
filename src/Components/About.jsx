import React from 'react'
import '../Css/About.css'
import ProfilePicture from '../Assets/ProfileJB2.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className='profile-picture'>
        <img src={ProfilePicture} alt="Profile Picture" />
      </div>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          A passionate student of frontend development, 
          Constantly seeking to deepen my understanding and refine my skills in crafting immersive digital experiences. 
          Driven by curiosity and fueled by a love for programming, 
          I thrive on discovering innovative ways to build responsive and user-friendly applications.
        </p>
        <p>
        As a dedicated team player, I cherish collaboration and value the diverse perspectives that come with it. 
        I'm eagerly looking forward to bringing my expertise to your team, 
        contributing to our collective success in creating extraordinary digital solutions.
        </p>
      </div>
    </div>
  )
}

export default About;