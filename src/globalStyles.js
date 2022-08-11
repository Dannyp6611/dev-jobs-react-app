import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  html {
    box-sizing: inherit;
    font-size: 62.5%;
  }

  body {
    background-color: rgb(242, 242, 242);
    color: rgb(110, 128, 152);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    color: rgb(25, 32, 45);
  }
`;

export default GlobalStyle;
