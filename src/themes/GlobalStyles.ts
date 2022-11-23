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

div[type='content-code']::-webkit-scrollbar {
  display: none;
}

// div[type='item-big']::-webkit-scrollbar-track {
//   background-color: transparent;
// }

// div[type='item-big']::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
//   border-radius: 15px;
// }

// div[type='item-big']::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
// }
// div[type='item-big']::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
//   border-radius: 20px;
//   border: 6px solid transparent;
//   background-clip: content-box;
// }

}
  `;

export default GlobalStyle;
