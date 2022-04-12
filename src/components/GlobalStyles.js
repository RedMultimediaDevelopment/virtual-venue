import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{box-sizing:border-box;}
  *::before,*::after{box-sizing:inherit;}
  html{font-size:10px;}
  body{padding:0;margin:0;font-weight:400;font-size:2.1rem;}
  html, body{height:100%;}
  body.overlay-open{overflow:hidden;}
  body, input{font-family:"Montserrat", Arial, sans-serif;}
  
`;
