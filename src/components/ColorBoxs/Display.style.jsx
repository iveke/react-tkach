import styled from "styled-components";

export const ColorDisplay = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props)=> props.background};
    border: 1px solid #000;
`