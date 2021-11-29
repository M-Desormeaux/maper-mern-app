import { createGlobalStyle } from "styled-components";

export const BaseStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }
    * {
        box-sizing: border-box;
    }
    body,
    html {
        background-color: dddddd;
        margin: 0;
        padding: 0;
    }
`