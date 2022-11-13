import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   
    scroll-behavior: smooth;
  
  }

  html, body, #root {
    font-family: Sofiapro, sans-serif;
    margin: 0;
}

// ::-webkit-scrollbar {
//   width: 10px;
// }

// ::-webkit-scrollbar-track {
//   background-color: transparent;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
//   border-radius: 15px;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
// }
// ::-webkit-scrollbar-thumb {
//   background-color: #1c3879;
//   border-radius: 20px;
//   border: 6px solid transparent;
//   background-clip: content-box;
// }
  `;

export default GlobalStyle;
