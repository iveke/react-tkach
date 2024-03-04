import { colors } from "constans.js";
import styled from "styled-components";

const getColorLevel = ({ level }) => {
  switch (level) {
    case 1:
      return colors.LEVEL_ONE;
    case 2:
      return colors.LEVEL_TWO;
    case 3:
      return colors.LEVEL_THREE;
    default:
      return "#000";
  }
};
const checkStatus = ({ status }) => (status ? colors.COMPLETE : "transparent");

export const List = styled.ul`
  margin: 20px 0;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  border: 4px solid #000;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  padding: 10px 20px;
  border: 1px solid ${getColorLevel};
  background-color: ${checkStatus};
`;

export const Title = styled.p`
  font-size: 10px;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #121212;
`;

export const Level = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid ${(props)=> getColorLevel(props)};
`;


