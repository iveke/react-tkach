import { colors } from "constans.js";
import { Link } from "react-router-dom";
import styled from "styled-components";

const getColorLevel = ({ level }) => {
  switch (level) {
    case "easy":
      return colors.LEVEL_ONE;
    case "middle":
      return colors.LEVEL_TWO;
    case "hard":
      return colors.LEVEL_THREE;
    default:
      return "#000";
  }
};

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
  border: 2px solid ${getColorLevel};
`;

export const Title = styled(Link)`
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
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 25px;
  border: 3px solid ${(props)=> getColorLevel(props)};
`;


export const DisplayItem = styled.div`
  display: block;
  padding: 10px;
  width: 400px;
  height: 100px;
  border: 2px solid #000;

`