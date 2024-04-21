import React from 'react'
import '../Css/Skills.css'

//import SVG Files
import bootstrapIcon from '../Assets/boostrap.svg';
import css3Icon from '../Assets/css3.svg';
import mongodbIcon from '../Assets/mongodb.svg'
import gitIcon from '../Assets/git.svg';
import githubIcon from '../Assets/github.svg';
import html5Icon from '../Assets/html5.svg';
import javascriptIcon from '../Assets/javascript.svg';
import mysqlIcon from '../Assets/mysql.svg';
import nodejsIcon from '../Assets/nodejs.svg';
import npmIcon from '../Assets/npm.svg';
import reactIcon from '../Assets/react.svg';
import typescriptIcon from '../Assets/typescript.svg';


const Skills = () => {
  return (
    <div className='skills-container'>
            <h2>Skills</h2>
        <div className='skills-icons'>
                <img src={bootstrapIcon} alt="Bootstrap" title="BOOTSTRAP"/>
                <img src={css3Icon} alt="Css3" title="CSS3"/>
                <img src={mongodbIcon} alt="MongoDB" title="MONGODB"/>
                <img src={gitIcon} alt="Git" title="GIT"/>
                <img src={githubIcon} alt="Github" title="GITHUB"/>
                <img src={html5Icon} alt="Html5" title="HTML5"/>
                <img src={javascriptIcon} alt="Javascript" title="JAVASCRIPT"/>
                <img src={mysqlIcon} alt="Mysql" title="MYSQL"/>
                <img src={nodejsIcon} alt="Node.js" title="NODE.JS"/>
                <img src={npmIcon} alt="Npm" title="NPM"/>
                <img src={reactIcon} alt="React" title="REACT"/>
                <img src={typescriptIcon} alt="Typescript" title="TYPESCRIPT"/>
        </div>
    </div>
  )
}

export default Skills