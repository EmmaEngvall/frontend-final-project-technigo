import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import user from 'reducers/user';
import surfPosts from 'reducers/surfPosts';
import { StyledNavBar, StyledNavLink, UlElements, LiElements, ElementP, ToggleButton, NavWrapper, LogoutButton } from 'styled/NavbarStyled';
import CloseMenuIcon from '../icons/phone-menu-close.svg';
import OpenMenuIcon from '../icons/phone-menu-open.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useRef to be able to connect to the DOM element and detect if mouseclick/scroll
  // is within navbar or outside
  const navRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname])

  const OnLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(surfPosts.actions.setCreatedByUserItems([]));
  };

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
            {(!accessToken) ? (
              <LiElements>
                <StyledNavLink to="/login"><ElementP>Register/Login</ElementP></StyledNavLink>
              </LiElements>)
              : (
                <LiElements>
                  <LogoutButton type="button" onClick={OnLogoutButtonClick}><ElementP>Log out</ElementP></LogoutButton>
                </LiElements>)}
          </UlElements>
        </nav>
      </NavWrapper>
    </StyledNavBar>
  );
};

export default Navbar