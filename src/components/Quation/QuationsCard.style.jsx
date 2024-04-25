import styled from "styled-components";



// const onDisplay = (active)=>{
//     console.log(active)
// switch (active) {
//     case true:
//         return "block";
//     case false:
//         return "none";
//     default:
//         return "none";
// }
// }

export const CardsWrap = styled.div`
display:flex;
flex-direction: column;
gap:30px;
`

export const CardStyle = styled.div`
width: 600px;
height: 90px;
padding: 30px 0;
font-size: 24px;
background-color: brown;
user-select: none;`

export const HiddenText = styled.div`

background-color: brown;
`;
