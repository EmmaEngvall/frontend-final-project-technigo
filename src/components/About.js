import React from 'react';
import styled from 'styled-components/macro';
import { BackgroundContainer } from 'styled/LoginStyled';
import ImageBackground from '../images/img_about.jpg';

const BackgroundImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const About = () => {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundImg src={ImageBackground} />
      </BackgroundContainer>
      <h2>Vision</h2>
      <p>”Our vision is to create a place for inspiration where you can share
        your experiences with fellow surfers...”
      </p>
      <h2>Background to project</h2>
      <p>To conclude a 22 week bootcamp with Technigo...</p>
    </div>
  )
}

export default About