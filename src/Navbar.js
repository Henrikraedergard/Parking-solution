import { Link } from "react-router-dom";
import styled from 'styled-components';

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
  margin-left: 35px;
  cursor: pointer;
`

// Layout

function Navbar() {
  return (
    <Nav>
      <Link to="/"><Logo src={"media/logos/PS-Logo-Ikon.svg"} alt={"Logo"} /></Link>
      <Ul>
        <Link to="/">Hjem</Link>
        <Link to="/products">Products</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/askndoai">Error</Link>
      </Ul>
    </Nav>
  )
}



export default Navbar;