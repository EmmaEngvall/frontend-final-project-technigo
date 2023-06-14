import React from 'react';
import { ContactHeader, ProfileImg } from 'styled/ContactStyled';
import iconGithub from '../icons/github_hover.svg';
import iconLinkedin from '../icons/linkedin_hover.svg';
import profileMalin from '../images/profile_malin.jpg';
import profileEmma from '../images/profile_emma.jpg';

const Contact = () => {
  return (
    <div>
      <ContactHeader>Get in touch with us</ContactHeader>
      <div>
        <h2>This is Malin</h2>
        <ProfileImg src={profileMalin} alt="Malin profile" />
        <p>Malin is a talented junior frontend developer, eager to learn new skills and deepen
        her knowledge in this field.
        With her background from logistic and trade, she brings valuable experience with
        creative problem-solving, improvement work, communication and a high focus on details.
        She is looking forward to combining her skills from previous roles with her new skills in
        frontend development, to create innovative solutions and great user experiences.
        </p>
        <div>
          <a
            href="https://github.com/MalinSkill"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconGithub} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/malin-skill-34696626b/"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconLinkedin} alt="linkedin icon" />
          </a>
          <p>Malin&apos;s
            <a
              href="https://portfolio-m-skill.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">Portfolio
            </a>
          </p>
        </div>
      </div>
      <div>
        <h2>This is Emma</h2>
        <ProfileImg src={profileEmma} alt="Emma profile" />
        <p>With a love for travel. Background as a Business Analyst for a Swedish retailer.</p>
        <div>
          <a
            href="https://github.com/EmmaEngvall"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconGithub} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/emma-engvall-b8157866/"
            target="_blank"
            rel="noopener noreferrer">
            <img className="sm-icon" src={iconLinkedin} alt="linkedin icon" />
          </a>
          <p>Emma&apos;s
            <a
              href="https://emma-engvall-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact