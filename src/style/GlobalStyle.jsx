import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
    display : flex;
    justify-content : center;
    box-sizing:border-box;
    width: 100%;
    height: 100%;
    background:radial-gradient( #f4c5ff5c, #e4e8ff76, #ffffff);
}
`;
