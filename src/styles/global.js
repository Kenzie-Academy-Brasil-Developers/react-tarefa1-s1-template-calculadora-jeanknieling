import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #F0FFF0;
        --black: #202124;
        --black-50: #444;
        --gray: #666;
        --gray-50: #CCC;
        --orange: #FF9000;
    }

    body {
        background-color: var(--black);
        font-size: 1rem;
    }

    .App {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    button {
        cursor: pointer;
    }
`;