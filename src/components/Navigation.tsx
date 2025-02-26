import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  color: ${(props) => props.theme.colors.background};
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 30px;
`;

const Logo = styled.img`
  display: flex;
  justify-content: flex-start;
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
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </Nav>
  );
};

export default Navigation;
