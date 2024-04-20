import React from 'react'
import '../Css/About.css'
import ProfilePicture from '../Assets/ProfileJB3.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nobis saepe quas fugiat vel, praesentium unde magni suscipit 
          optio perferendis reprehenderit eius aperiam doloremque tenetur, 
          rerum animi, qui modi asperiores dolorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolores voluptatibus quam sequi minus, accusamus illo excepturi 
          commodi rerum aliquam nisi nostrum aliquid nulla neque, corrupti 
          iusto vero tempore soluta ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Repellat laborum asperiores illo, illum ut mollitia dignissimos. 
          Nulla modi sequi fuga doloremque 
          dignissimos ipsa adipisci saepe est enim doloribus! Dolorem, mollitia.
        </p>
      </div>
      <div className='profile-picture'>
        <img src={ProfilePicture} alt="Profile Picture" />
      </div>
    </div>
  )
}

export default About