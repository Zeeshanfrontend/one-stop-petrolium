// src/components/Navbar.js
import React from 'react';
import { Logo, Menu, MenuItem, Nav } from './NavbarStyles';
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt='logo' />
      </Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/services">Services</MenuItem>
        <MenuItem to="/about">About us</MenuItem>
        <MenuItem to="/contact">Contact us</MenuItem>
        <MenuItem to="/blogs">Blogs</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
