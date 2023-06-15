import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.nav`
position: absolute;
top: 0;
left: 0;
width: 100vw;
z-index: 1;

@media (min-width: 667px){
  width: 90vw;
  justify-content: space-between;
  position: initial;
  z-index: initial;
  top: initial;
  left: initial;
  align-items: center;
}
`
export const UlElements = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100vh;

  @media (min-width: 667px){
  flex-direction: row;
  height: 5vh;
  align-items: center;
  width: 85%;
}
  @media (min-width: 1024px){
  flex-direction: row;
}
`

export const LiElements = styled.li`
  list-style-type: none;

  @media (min-width: 667px){
  padding: 5px;
}
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Urbanist;
  font-weight: 500;
  
  &.active {
    text-decoration-line: underline;
    text-decoration-color: black;
    text-decoration-thickness: 2px;
  }
`

export const ElementP = styled.p`
  color: black;
  text-transform: uppercase;

  @media (min-width: 667px){
  font-weight: bold;
  font-size: 0.9rem;
}
`

export const ToggleButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 667px){
  display: none;
}
  @media (min-width: 1024px){
    display: none;
}
`

export const LogoutButton = styled.button`
  height: fit-content;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-family: Urbanist;
  font-weight: 500;
`

export const NavWrapper = styled.div`

  @media (max-width: 666px){
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem;
    position: fixed;
    right: 0;
    width: 75%;
    min-height: 60vh;
    overflow: hidden;
    background-color: #e4dec9;
    z-index: 9;
    transition: all 0.5s ease-in-out;
    ${(props) => !props.isOpen
    && `
      display: none;
    `}
  }

  @media (min-width: 667px){
    justify-content: flex-end;
    width: 100%;
    z-index: 0;
  }
  @media (min-width: 1024px){
    justify-content: center;
  }
`