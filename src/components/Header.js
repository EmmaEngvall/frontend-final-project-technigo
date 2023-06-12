import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeButton, Logo, StyledHeader } from 'styled/HeaderStyled';
import logo from '../images/logo_white_new.jpg';
import Navbar from './Navbar';

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  };

  return (
    <StyledHeader>
      <HomeButton type="button" onClick={goToHome}>
        <Logo src={logo} alt="logo" />
      </HomeButton>
      <Navbar />
    </StyledHeader>
  )
}

export default Header