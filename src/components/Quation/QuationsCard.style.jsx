import styled from "styled-components";

const onDisplay = (value) => {
  switch (value) {
    case true:
      return "block";
    case false:
      return "none";
  }
};

export const HiddenText = styled.div`
  display: ${({open})=>{onDisplay(open)}};
`;
