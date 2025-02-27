import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <Logo src={logo} alt="Dishcovery Logo" />
      </NavLink>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <LinksContainer menuOpen={menuOpen}>
        <StyledNavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/favorites" onClick={() => setMenuOpen(false)}>
          Favorites
        </StyledNavLink>
      </LinksContainer>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.background};
  position: relative;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const LinksContainer = styled.div<{ menuOpen: boolean }>`
  display: flex; /* Se till att den alltid är synlig på desktop */
  gap: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    text-align: center;
    padding: 10px 0;
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    z-index: 999;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  font-family: "Poiret One";

  &.active {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px 0;
    color: ${(props) => props.theme.colors.secondary};

    &.active {
      text-decoration: underline;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-right: auto;
`;
