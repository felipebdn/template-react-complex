import { createGlobalStyle } from "styled-components"
import "@fontsource/jetbrains-mono";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: "JetBrains Mono";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing: antialiased;
    /* background: #050020; */
    /* background: #0E0B16; */
    /* background: #262626; */
    background: #111111;
    color: #FEFEFE;
  }
`