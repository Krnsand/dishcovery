import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  color: ${(props) => props.theme.colors.background};
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </Nav>
  );
};

export default Navigation;
