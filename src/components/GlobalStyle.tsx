import { createGlobalStyle } from "styled-components";
import "../fonts/corruption.css";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262A36;
    font-family: corruption;
  }

  p,
  a {
    // letter-spacing: 0.33em;
    text-transform: uppercase;
    line-height: 1;
    margin: 0;
    font-size: 12px;
  }
`;
