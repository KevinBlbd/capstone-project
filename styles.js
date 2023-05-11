import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  body {
    margin: 0;
    font-family: system-ui;
    /* background-color: #2F3640; */
    background-image: linear-gradient(to bottom, #2F3640, #2F2F40);
  }`;
