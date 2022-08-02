import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;

    --purple-dark: #4B2995;
    --purple: #8047F8;
    --purple-light: #EBE5F9;

    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;
    --background: #FAFAFA;
    --white: #FFFFFF;
    --base-card: #F3F2F2;
    --base-button: #E6E5E5;
    --base-input: #EEEDED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768) {
    font-size: 56.3%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background: var(--background);
    color: var(--base-text);
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
  }
`
