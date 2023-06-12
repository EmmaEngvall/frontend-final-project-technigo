import React from 'react';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import ImageBackground from '../images/img_about.jpg';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 30%;
  width: 30%;
`

const About = () => {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundImg src={ImageBackground} />
        <p>Photo by X on Unsplash</p>
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