import { createGlobalStyle } from "styled-components";
import "../fonts/projection.css";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #262A36;
    font-family: "projection";
  }

  p,
  a,
  button,
  div {
    font-family: inherit;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    line-height: 1.5em;
    margin: 0;
    font-size: 12px;
  }

  .web3modal-modal-container {
    .web3modal-modal-card {
      min-width: auto;
      border-radius: 0;
      background: ${(props) => props.theme.grayscale[5]};
    }

    .web3modal-provider-wrapper {
      border: 0;

      &:first-child {
        padding-bottom: 4px;
      }

      &:last-child {
        padding-top: 4px;
      }
    }

    .web3modal-provider-container {
      border-radius: 0;
      background: ${(props) => props.theme.grayscale[10]};
    }

    .web3modal-provider-name {
      font-size: 20px;
      color: white;
    }

    .web3modal-provider-description {
      padding: 0.5em 1em;
      font-size: 12px;
    }
  }
`;
