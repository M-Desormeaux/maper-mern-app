import { createGlobalStyle } from "styled-components";

export const BaseStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body,
    html {
        background-color: #dddddd;
    }
`;
