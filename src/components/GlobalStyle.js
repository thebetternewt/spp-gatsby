import { createGlobalStyle } from "styled-components";
import somersette from "../fonts/somersette.woff";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i|Playfair+Display:400,400i&display=swap');
  
  @font-face {
    font-family: "Somersette";
    src: url(${somersette}) format('woff');
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
