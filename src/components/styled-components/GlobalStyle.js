import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    //Colors
    --primary-color: #070707;
    --secondary-color: #FFFFFF;
    --light-color: rgba(57, 188, 203, 0.2);
    --link-color: #39BCCB;

    //Font Weights
    --semi-bold: 600;
    --bold: 700;

    //Border radius
    --border-radius: 10px;
    --img-border-radius: 10px 10px 0px 0px;
}

* {
    box-sizing: border-box;
    font-family: 'Poppins', Arial, sans-serif;
    list-style: none;
}

body {
    margin: 0px;
    padding: 0px;
    color: (--primary-color);

    h1 {
        font-size: 2.25rem;
        margin-bottom: 0px;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
        margin: 0px;
    }

    h4 {
        font-size: 1rem;
        margin: 0px;
    }

    p {
        font-size: 1rem;
        margin-bottom: 0px;
    }
}

`;
