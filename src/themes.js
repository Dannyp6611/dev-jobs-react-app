import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: 'rgb(242, 242, 242)',
  fontColor: '#9daec2',
  headingColor: '#121721',
  filterBackground: '#fff',
  btnBackground: '#F0F8FF',
  btnFontColor: '#5964e0',
  checkBoxBgColor: 'rgb(231, 232, 233)',
};

export const darkTheme = {
  body: '#121721',
  filterBackground: '#19202d',
  fontColor: '#9daec2',
  headingColor: '#fff',
  btnBackground: '#303642',
  btnFontColor: '#fff',
  checkBoxBgColor: '#313743',
};

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

  a {
    color: currentColor;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, .full-time-label {
    font-weight: 700;
    color: ${(props) => props.theme.headingColor}
  }

  .search-form {
    background-color: ${(props) => props.theme.filterBackground};
  }

  .search-form {

    input {
      color: ${(props) => props.theme.headingColor} !important;
    }

    input::placeholder {
      color: ${(props) => props.theme.fontColor} !important;
    }
  }

  .search-form--02 {
    color: ${(props) => props.theme.fontColor};
    &:not(:first-of-type) {
      color: ${(props) => props.theme.fontColor};
    }
  }

  .search-form--02 option {
    background-color: ${(props) => props.theme.filterBackground};
  }


  .job-item {
    background-color: ${(props) => props.theme.filterBackground}
  }

  .job__content,
  .job__header,
  .footer {
    background-color: ${(props) => props.theme.filterBackground}
  }

  .btn-secondary {
    background-color: ${(props) => props.theme.btnBackground} !important;
    color: ${(props) => props.theme.btnFontColor} !important;
  }

  .checkbox-span::before {
    background-color: ${(props) => props.theme.checkBoxBgColor};
  }

  .filter-modal {
    background-color: ${(props) => props.theme.filterBackground};

    select, .search-form--03 {
      background-color: ${(props) => props.theme.filterBackground};
    }

  }
`;

export default GlobalStyle;
