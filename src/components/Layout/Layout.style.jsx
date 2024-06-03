import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  background-color: #2e3035;
`;

export const PagesLink = styled.li`
  color: #707073;
  list-style: none;
`;


export const StyleLink = styled(NavLink)`
  color: #707073;
  list-style: none;
&.active{
    color:#005eff;
}
`;