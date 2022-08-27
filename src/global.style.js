import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 100;
    src: url("./assets/fonts/woff/YekanBakh-Thin.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-Thin.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 300;
    src: url("./assets/fonts/woff/YekanBakh-Light.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-Light.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: normal;
    src: url("./assets/fonts/woff/YekanBakh-Regular.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-Regular.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 600;
    src: url("./assets/fonts/woff/YekanBakh-SemiBold.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-SemiBold.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: bold;
    src: url("./assets/fonts/woff/YekanBakh-Bold.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-Bold.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 800;
    src: url("./assets/fonts/woff/YekanBakh-ExtraBold.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-ExtraBold.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 900;
    src: url("./assets/fonts/woff/YekanBakh-Black.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-Black.woff2") format("woff2");
  }
  
  @font-face {
    font-family: Yekan Bakh;
    font-style: normal;
    font-weight: 950;
    src: url("./assets/fonts/woff/YekanBakh-ExtraBlack.woff") format("woff"),
      url("./assets/fonts/woff2/YekanBakh-ExtraBlack.woff2") format("woff2");
  }
  
  body {
    font-family: Yekan Bakh;
    background: #111;
    color: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  } 
`;

export default GlobalStyle;
