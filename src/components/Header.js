import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/login"><p>Register/Login</p></NavLink>
        <NavLink to="/profile"><p>My profile</p></NavLink>
        <NavLink to="/about"><p>About</p></NavLink>
        <NavLink to="/contact"><p>Contact</p></NavLink>
        <NavLink to="/credits"><p>Credits</p></NavLink>
      </nav>
    </header>
  )
}

export default Header