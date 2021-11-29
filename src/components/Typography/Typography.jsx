import { createElement } from "react";

export const Typography = ({type, props, children}) => {

    switch (type) {
        case "h1":
            break;
        case "h2":
            break;
        case "h3":
            break;
        case "h4":
            break;
        default:
            type = "p";
    }

    return (
        createElement(type,[props],[children])
    )
}