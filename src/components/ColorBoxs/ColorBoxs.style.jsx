// import { colors } from "colors.js";
import styled from "styled-components";

export const Card = styled.li`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  color: white;
  text-align: center;
`;
