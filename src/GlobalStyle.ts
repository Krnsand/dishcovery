import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.gradient};
    margin: 0;
    padding: 0;
    font-family: Poiret One, Jacques Francois Shadow, Borel, sans-serif;
  }
`;

export default GlobalStyle;