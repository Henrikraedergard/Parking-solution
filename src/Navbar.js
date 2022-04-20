import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from './logo.svg'

// Styling

const Nav = styled.nav`
  height: 80px;
  display: flex;
  font-size: 1.25em;
  align-items: center;
  justify-content: space-between;
  margin: 0px 35px;
`

const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 15px;
  font-size: 1.1em;
`

const Logo = styled.img`
  height: 35px;
  cursor: pointer;
`

const active = {
  color: "rgb(250, 50, 50)",
  borderBottom: "2px solid rgb(250, 50, 50)"
}

const inactive = {
  color: "rgb(75, 75, 75)"
}

// Layout



function Navbar() {
  return (
    <Nav>
      <NavLink to="/"><Logo src={logo} alt={"Logo"} /></NavLink>
      <Ul>
        <NavLink to="/" style={ ({ isActive }) =>
          isActive ? active : inactive}>Hjem</NavLink>
        <NavLink to="/products" style={ ({ isActive }) =>
          isActive ? active : inactive}>Produkter</NavLink>
        <NavLink to="/projects" style={ ({ isActive }) =>
          isActive ? active : inactive}>Prosjekter</NavLink>
        <NavLink to="/askndoai" style={ ({ isActive }) =>
          isActive ? active : inactive}>Error</NavLink>
      </Ul>
    </Nav>
  )
}



export default Navbar;