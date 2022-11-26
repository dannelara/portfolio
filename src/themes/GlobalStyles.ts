import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  html, body, #root {
    font-family: 'Playfair Display',serif;
    margin: 0;
    color: black;

}

div[type='content']::-webkit-scrollbar {
  display: none;
}

}
  `;

export default GlobalStyle;
