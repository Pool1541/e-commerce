import { createGlobalStyle } from 'styled-components';
import Lato_Light from '../fonts/Lato-Light.woff2';
import Lato_Regular from '../fonts/Lato-Regular.woff2';
import Lato_Bold from '../fonts/Lato-Bold.woff2';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${Lato_Light}) format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Lato_Regular}) format('woff2');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${Lato_Bold}) format('woff2');
  }

  :root {
    --mahogany : #BD4106;
    --tea-rose : #D0ACAF;
    --snow: #f4eced;
    --white: #fff
    --y-green: #94BE1E;
    --gray: #777772;
    --black: #020202;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Lato', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    min-height: 100vh;
    background-color: var(--white);
    color: var(--black);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    border: none;
    background-color: unset;
    outline: none;
  }

  a, button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    pointer-events: none;
  }

`;

export default GlobalStyle;
