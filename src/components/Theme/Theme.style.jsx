import { theme, themeText } from "colors";
import styled from "styled-components";


const getColorsTheme = (colorName, stage) => {
let color = colorName;
if(stage){
    color = colorName === "light" ? "dark" : "light"
}
return theme[color] ?? theme.dark
}

export const Page = styled.body`
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-color: ${(props) => getColorsTheme(props.theme)};
`;

export const BtnTheme = styled.button`
padding: 20px 50px;
color: ${(props) => getColorsTheme(props.theme)};
background-color: ${(props) => getColorsTheme(props.theme, true)};
border-radius: 10px;
cursor: pointer;

`