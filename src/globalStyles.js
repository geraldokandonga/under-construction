import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
}

  @media only screen and (max-width: 959px){
    html {
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
        -webkit-tap-highlight-color: transparent;
    }
  }

body {
    font-family:  "Lato", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    min-height: 100vh;
    overflow-x: hidden !important;
    -webkit-font-smoothing: antialiased;
    /* Fix for webkit rendering */
    -webkit-text-size-adjust: 100%;
    -moz-font-smoothing: unset;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
}


a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

img{
  max-width: 100%;
  height: auto;
}

input[type='text'],
input[type='number'],
input[type='search'],
input[type='password'],
input[type='email'],
input[type='url'],
input[type='tel']{
    border: 1px solid transparent;
}

input:hover[type='text'],
input:hover[type='number'],
input:hover[type='search'],
input:hover[type='password'],
input:hover[type='email'],
input:hover[type='url'],
input:hover[type='tel'],
textarea:hover {
    background-color: #fff;
    border-color: rgba(0,0,0,0.1);
    -webkit-box-shadow: 0 0 0 4px rgba(234,76,137,0.1);
    box-shadow: 0 0 0 4px rgba(234,76,137,0.1);
}


button[type='submit'], input[type='submit'] {
    cursor: pointer;
}


`;
