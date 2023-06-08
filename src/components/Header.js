import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo_white.jpg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
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