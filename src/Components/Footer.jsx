import React from 'react';
import '../Css/Footer.css';
import linkedinIcon from '../Assets/linkedin.svg';
import emailIcon from '../Assets/email.svg';
import githubIcon from '../Assets/github.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-container'>
          <div className='contact-info'>
            <h3>Contact</h3>
            <div className='contact-item'>
              <a href="mailto:jonas.backas@hotmail.com">
                <img src={emailIcon} alt="Email" />
              </a>
              <p>Email: jonas.backas@hotmail.com</p>
            </div>
          </div>
          <div className='social-media'>
            <h3>Social Media</h3>
            <div className='contact-item'>
              <a href="https://github.com/JonasB91" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <p>GitHub</p>
            </div>
            <div className='contact-item'>
              <a href="https://www.linkedin.com/in/jonas-backas-70506624b/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <p>LinkedIn</p>
            </div>
          </div>
          <div className='additional-info'>
            <p>Currently a student at Jensen Education <br/>Studying for Frontend Development with web security<br/> - Graduation in summer 2026</p>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2024 Made by Jonas Backas</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
