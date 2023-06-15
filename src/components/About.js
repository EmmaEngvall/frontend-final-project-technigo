import React from 'react';
import { CreditTxt } from 'styled/MainStyled';
import { StyledMainWrapper, InnerWrapper, AboutHeader, AboutH2, AboutH3, AboutP, BackgroundContainer, BackgroundImg } from 'styled/AboutStyled';
import ImageBackground from '../images/img_about.jpg';

const About = () => {
  return (
    <StyledMainWrapper>
      <InnerWrapper>
        <AboutHeader>About Wave Finder</AboutHeader>
        <BackgroundContainer>
          <BackgroundImg src={ImageBackground} />
          <CreditTxt>Photo by
            <a
              href="https://unsplash.com/@bradhalcrow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Brad Halcrow
            </a> on
            <a
              href="https://unsplash.com/photos/8hJ8TFF7Mgw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"> Unsplash
            </a>
          </CreditTxt>
        </BackgroundContainer>
        <AboutH2>Vision</AboutH2>
        <AboutP>”Our vision is to create a place for inspiration where you can share
          your experiences with fellow surfers...no matter how experienced you are.
          ...Dreaming about standing on a board for the first time, or if you have been riping waves
          for decades.
          Join the conversation with good vibes only. Be mindful of what you write and
          see you out there!”
        </AboutP>
        <AboutH3>Background to project</AboutH3>
        <AboutP>To conclude a 22 week bootcamp with Technigo...</AboutP>
      </InnerWrapper>
    </StyledMainWrapper>
  )
}

export default About