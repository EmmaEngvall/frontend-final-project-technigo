import React from 'react';
import { StyledMainWrapper, InnerWrapper, OuterWrapperDetails, DetailsWrapper, ContactHeader, ContactP, ContactIconWrapper, ProfileImg } from 'styled/ContactStyled';
import iconGithub from '../icons/github_hover.svg';
import iconLinkedin from '../icons/linkedin_hover.svg';
import profileMalin from '../images/profile_malin.jpg';
import profileEmma from '../images/profile_emma.jpg';

const Contact = () => {
  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <ContactHeader>Get in touch with us</ContactHeader>
        <OuterWrapperDetails>
          <DetailsWrapper>
            <h2>This is Malin</h2>
            <ProfileImg src={profileMalin} alt="Malin profile" />
            <ContactP><strong>Malin</strong> is a talented
              <strong> junior frontend developer</strong>,
            eager to learn new skills and deepen
            her knowledge in this field.
            With her background from <strong>logistic and trade</strong>, she brings valuable
            experience with <strong>creative problem-solving</strong>, improvement work,
            communication and a high focus on details.
            She is looking forward to combining her skills from previous roles with her
            new skills in
            frontend development, to <strong>create innovative solutions</strong> and great user
            experiences.
            </ContactP>
            <div>
              <ContactIconWrapper>
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
              </ContactIconWrapper>
              <ContactP>Malin&apos;s
                <a
                  href="https://portfolio-m-skill.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"> Portfolio
                </a>
              </ContactP>
            </div>
          </DetailsWrapper>
          <DetailsWrapper>
            <h2>This is Emma</h2>
            <ProfileImg src={profileEmma} alt="Emma profile" />
            <ContactP><strong>Emma</strong> is a passionate
              <strong> junior front-end developer </strong>
            with a knack for problem-solving and a love for travel.
            With a solid background as a <strong>Business Analyst</strong> spanning over five years,
            she brings a unique perspective to her development work.
            Her experience as a Business Analyst has equipped me with strong analytical skills,
              <strong>an eye for detail</strong>, and the ability to understand and translate
            complex requirements
            into <strong>user-friendly interfaces</strong>.
            </ContactP>
            <div>
              <ContactIconWrapper>
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
              </ContactIconWrapper>
              <ContactP>Emma&apos;s
                <a
                  href="https://emma-engvall-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"> Portfolio
                </a>
              </ContactP>
            </div>
          </DetailsWrapper>
        </OuterWrapperDetails>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default Contact