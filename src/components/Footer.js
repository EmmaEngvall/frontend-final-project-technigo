import React from 'react';
import iconGithub from '../icons/github_hover.svg';

const Footer = () => {
  return (
    <>
      <div>
        <p>Technigo Web Development Boot Camp spring 2023</p>
        <p>Malin Skill</p>
        <p>
          <a
            href="https://github.com/MalinSkill"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconGithub} alt="github icon" />
          </a>
        </p>
      </div>
      <div>
        <p>Emma Engvall</p>
        <p>
          <a
            href="https://github.com/EmmaEngvall"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconGithub} alt="github icon" />
          </a>
        </p>
      </div>
    </>
  )
}

export default Footer