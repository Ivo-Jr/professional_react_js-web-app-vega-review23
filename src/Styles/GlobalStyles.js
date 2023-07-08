import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --color-white: #fff;
    --color-gray: #E1E1E6;

    --color-wine: #891A14;
    --color-darkWine: #68100C;

    --color-background: #161a1e;
    --color-green: #04D361;
  }

  html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    scroll-behavior: smooth;
    height: 100%;
    background-color: var(--color-background);
  }
  
/* 
  ::-webkit-scrollbar {width: 0! important}
    body {
      background-color: #161a1e;
    } */

  button {
    cursor: pointer;
  }
`;