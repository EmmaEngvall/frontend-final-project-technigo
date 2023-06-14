import React from 'react';
import { StyledFooterWrapper, StyledTopText, StyledP, GithubOuterWrapper, GithubWrapper } from 'styled/FooterStyled';
import { CreditTxt } from 'styled/MainStyled';
import iconGithub from '../icons/github_hover.svg';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledTopText>Technigo Web Development Boot Camp spring 2023</StyledTopText>
      <GithubOuterWrapper>
        <GithubWrapper>
          <StyledP>Malin Skill</StyledP>
          <StyledP>
            <a
              href="https://github.com/MalinSkill"
              target="_blank"
              rel="noopener noreferrer">
              <img className="sm-icon" src={iconGithub} alt="github icon" />
            </a>
          </StyledP>
        </GithubWrapper>
        <GithubWrapper>
          <StyledP>Emma Engvall</StyledP>
          <StyledP>
            <a
              href="https://github.com/EmmaEngvall"
              target="_blank"
              rel="noopener noreferrer">
              <img className="sm-icon" src={iconGithub} alt="github icon" />
            </a>
          </StyledP>
        </GithubWrapper>
      </GithubOuterWrapper>
      <CreditTxt>
        All icons from
        <a
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"> Icons8
        </a>
      </CreditTxt>
    </StyledFooterWrapper>
  )
}

export default Footer