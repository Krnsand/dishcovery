import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo3.png";

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={logo} alt="Dishcovery Logo" />
      </NavLink>
      <LinksContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
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
  padding: 10px;
  color: ${(props) => props.theme.colors.background};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    justify-content: center;
    width: 100%;
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
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-right: auto;
  margin-left: 2rem;
`;
