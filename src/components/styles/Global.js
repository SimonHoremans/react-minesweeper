import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.general}
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
    }

`

export default GlobalStyles