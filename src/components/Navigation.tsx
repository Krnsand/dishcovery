import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  background: rgb(90, 176, 140);
  padding: 10px;
  color: white;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
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
