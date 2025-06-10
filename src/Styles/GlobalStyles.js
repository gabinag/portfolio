import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --body-background: #fff;
    --body-color: #000;
    --detail: #fff;
    --detail-2: #000;
    --detail-3: #525252;
    --bg-footer: #000;
    --stars: #fff;
    }

    [data-theme="dark"] {
        --body-background: #000;
        --body-color: #fff;
        --detail: #242526;
        --detail-2: #7b7b7b;
        --detail-3: #a9a9a9;
        --bg-footer: #242526;
        --stars: #a9a9a9;
    }

    * {
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--body-background);
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }
`;