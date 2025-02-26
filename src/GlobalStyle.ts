import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.gradient};
    margin: 0;
    padding: 0;
    font-family: Poiret One, Jacques Francois Shadow, Borel, sans-serif;
    font-weight: 900;
  }

  Button {
    background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid #621e72;
  }
  }
`;

export default GlobalStyle;