import React from 'react';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import { CreditTxt } from 'styled/MainStyled';
import { AboutHeader } from 'styled/AboutStyled';
import ImageBackground from '../images/img_about.jpg';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 30%;
  width: 30%;
`

const About = () => {
  return (
    <div>
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
      <h2>Vision</h2>
      <p>”Our vision is to create a place for inspiration where you can share
        your experiences with fellow surfers...no matter how experienced you are.
        ...Dreaming about standing on a board for the first time, or if you have been riping waves
        for decades.
        Join the conversation with good vibes only. Be mindful of what you right and lets...”
      </p>
      <h2>Background to project</h2>
      <p>To conclude a 22 week bootcamp with Technigo...</p>
    </div>
  )
}

export default About