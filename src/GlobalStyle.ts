import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
    font-family: Yusei Magic, Jacques Francois Shadow, sans-serif;
  }
`;

export default GlobalStyle;