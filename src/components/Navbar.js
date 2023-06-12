import React, { useState, useRef, useEffect } from 'react';
import { StyledNavBar, StyledNavLink, UlElements, LiElements, ElementP, ToggleButton, NavWrapper } from 'styled/NavbarStyled';
import CloseMenuIcon from '../icons/phone-menu-close.svg';
import OpenMenuIcon from '../icons/phone-menu-open.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useRef to be able to connect to the DOM element and detect if mouseclick/scroll
  // is within navbar or outside
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScrollOutside = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScrollOutside);

    // Cleanup function remove eventlisteners,executed when component is unmounted or re-rendered
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScrollOutside);
    }
  }, [isOpen]);

  console.log(isOpen)
  return (
    <StyledNavBar>
      {isOpen && <ToggleButton onClick={() => setIsOpen(false)}><img src={CloseMenuIcon} alt="icon for close menu option" /></ToggleButton>}
      {!isOpen && <ToggleButton onClick={() => setIsOpen(true)}><img src={OpenMenuIcon} alt="icon for open menu option" /></ToggleButton>}
      <NavWrapper ref={navRef} isOpen={isOpen}>
        <nav>
          <UlElements>
            <LiElements>
              <StyledNavLink to="/"><ElementP>Home</ElementP></StyledNavLink>
            </LiElements>
            <LiElements>
              <StyledNavLink to="/profile"><ElementP>My profile</ElementP></StyledNavLink>
            </LiElements>
            <LiElements>
              <StyledNavLink to="/about"><ElementP>About</ElementP></StyledNavLink>
            </LiElements>
            <LiElements>
              <StyledNavLink to="/contact"><ElementP>Contact</ElementP></StyledNavLink>
            </LiElements>
            <LiElements>
              <StyledNavLink to="/login"><ElementP>Register/Login</ElementP></StyledNavLink>
            </LiElements>
          </UlElements>
        </nav>
      </NavWrapper>
    </StyledNavBar>
  );
};

export default Navbar