import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import logo from './logo-text.svg'
import logosmall from './logo.svg'
import list from './list.svg'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import { duration } from '@mui/material';

// Styling

const Nav = styled.div`
  height: 80px;
  display: flex;
  font-size: 1.25em;
  align-items: center;
  justify-content: space-between;
  margin: 0px 35px;
  text-align: start;
`

const Logo = styled.img`
  height: 35px;
  cursor: pointer;
`

const Ul = styled.ul`
  align-items: center;
  display: flex;
  gap: 15px;
  font-size: 1.1em;
  z-index: 10;

  @media only screen and (max-width: 950px) {
    display: none
  }
`

const UlSmall = styled.ul`
  display: flex;
  position: fixed;
  flex-direction: column;
  font-size: 2em;
  gap: 20px;
  background-color: white;
  position: fixed;
  width: 80%;
  right: -80%;
  top: 0px;
  justify-content: center;
  height: 100%;
  align-items: start;
  z-index: 10;

  @media only screen and (max-width: 950px) {
  }
`

const Hamburger = styled.img`
  height: 40px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 950px) {
    display: block;
  }
`

const Lukk = styled.button`
  color: rgb(75, 75, 75)
  position: absolute;
  left: 40px;
  display: none;

  @media only screen and (max-width: 950px) {
    display: block
  }
`

const Background = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 80%;
  background-color: rgb(255, 255, 255);
  transition: 100ms;
  z-index: 9;
  border-left: 0.5px solid rgba(0, 0, 0, 0.5)
`

const active = {
  color: "rgb(250, 50, 50)",
  borderBottom: "2px solid rgb(250, 50, 50)"
}

const inactive = {
  color: "rgb(75, 75, 75)"
}


const Text = styled.p`
  @media only screen and (max-width: 950px) {
    padding-left: 30px;
  }
`

function Navbar() {
  return (
    <>
      <Nav>
        <Tooltip delay={[800, 0]} title="Gå til hjemsiden">
          <NavLink to="/"><Logo src={logo} alt={"Logo"} /></NavLink>
        </Tooltip>

        <Ul>
          <Lukk onClick={openNav}>Lukk</Lukk>
          <NavLink to="/" style={({ isActive }) =>
            isActive ? active : inactive}><Text>Hjem</Text></NavLink>
          <NavLink to="/produkter" style={({ isActive }) =>
            isActive ? active : inactive}><Text>Produkter</Text></NavLink>
          <NavLink to="/prosjekter" style={({ isActive }) =>
            isActive ? active : inactive}><Text>Prosjekter</Text></NavLink>
          <NavLink to="/kontakt" style={({ isActive }) =>
            isActive ? active : inactive}><Text>Kontakt oss</Text></NavLink>
        </Ul>
        <UlSmall id={"nav-list"}>
          <Lukk onClick={openNav}>Lukk</Lukk>
          <NavLink to="/" style={({ isActive }) =>
            isActive ? active : inactive} onClick={openNav}><Text>Hjem</Text></NavLink>
          <NavLink to="/produkter" style={({ isActive }) =>
            isActive ? active : inactive} onClick={openNav}><Text>Produkter</Text></NavLink>
          <NavLink to="/prosjekter" style={({ isActive }) =>
            isActive ? active : inactive} onClick={openNav}><Text>Prosjekter</Text></NavLink>
          <NavLink to="/kontakt" style={({ isActive }) =>
            isActive ? active : inactive} onClick={openNav}><Text>Kontakt oss</Text></NavLink>
        </UlSmall>

        <Hamburger onClick={openNav} src={list} />
      </Nav>
      <Background id={"background"} />
    </>
  )
}

let visible = false;

function openNav() {
  // let background = document.getElementById("background");
  // background.style.display = visible ? "none" : "block";

  let ul = document.getElementById("nav-list");
  // ul.style.display = visible ? "none" : "flex";
  // ul.style.backgroundColor = visible ? "none" : "white";

  let fadeIn = { right: [-80 + "%", 0 + "%"] }
  let fadeOut = { right: [0 + "%", -80 + "%"] }

  ul.animate(visible ? fadeOut : fadeIn, { duration: 300, fill: "forwards", easing: "cubic-bezier(.17,.67,.35,1.05)" })

  let body = document.querySelector("body");
  body.style.overflow = visible ? "scroll" : "hidden";;


  visible = !visible
}



export default Navbar;