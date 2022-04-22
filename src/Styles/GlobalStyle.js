import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }
    html, body, #root, .App {
        height: 100%;
        width: 100%;
        background-color: var(--white);
        color: #333;
        -webkit-font-smoothing: antialiased !important;
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary: #7897da;
        --secondary: #d69af0;
        --white: #fff;
        --gray: #8a8c8a;
        
    }
`;

export default GlobalStyle;