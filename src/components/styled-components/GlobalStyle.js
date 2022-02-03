import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    primary-color: #070707;
    secondary-color: #FFFFFF;

    border-radius: 30px;
}

* {
    box-sizing: border-box;
    font-family: 'Poppins', Arial, sans-serif;
}

body {
    margin: 0px;
    padding: 0px;
    color: #070707;

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        margin-top: 0px;
    }

    p {
        font-size: 1rem;
    }
}

`;
