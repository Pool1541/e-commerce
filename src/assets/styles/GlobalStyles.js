import { createGlobalStyle } from 'styled-components';
import Lato_Light from '../fonts/Lato-Light.woff2';
import Lato_Regular from '../fonts/Lato-Regular.woff2';
import Lato_Bold from '../fonts/Lato-Bold.woff2';
import BREAKPOINTS from './breakPoints';

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
    --mahogany800: #BD4106AB;
    --tea-rose : #D0ACAF;
    --snow: #f4eced;
    --white: #fff;
    --gray-light: #e0e0e0;
    --y-green: #94BE1E;
    --green: #801a00;
    --error: #e61d1d;
    --gray: #777772;
    --gray-medium: #c1c1c1;
    --black: #020202;
    --p-color: #3d3d3d;
    --paragraph-size: 1.5rem;
    --heading3-size: 2.5rem;
    --heading2-size: 3rem;
    --heading1-size: 4rem;

    @media screen and (${BREAKPOINTS.MOVIL_L}){
      --paragraph-size: 1.4rem;
      --heading3-size: 1.8rem;
      --heading2-size: 2rem;  
      --heading1-size: 3rem;

    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Lato', sans-serif;
  }

  h1 {
    font-size: var(--heading1-size);
  }

  h2 {
    font-size: var(--heading2-size);
  }

  h3 {
    font-size: var(--heading3-size);
  }

  html {
    font-size: 62.5%;
  }

  *::selection {
    background-color: #e9b5846b;
    color: var(--tea-rose);
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
    font-size: var(--paragraph-size);
    font-weight: 600;
  }

  a, button, div, span {
    font-size: var(--paragraph-size);
  }

  ul {
    list-style: none;
  }

  img {
    pointer-events: none;
  }

`;

export default GlobalStyle;
