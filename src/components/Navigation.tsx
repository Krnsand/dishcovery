import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Sprider ut elementen */
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 15px;
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

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
  font-family: "Jacques Francois Shadow";
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  margin-right: auto;
`;

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="Dishcovery Logo" />
      </Link>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </LinksContainer>
    </Nav>
  );
};

export default Navigation;
