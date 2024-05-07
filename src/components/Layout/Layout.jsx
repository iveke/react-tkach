import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(NavLink)`
color: #000;
&.active{
    color:#0ff;
}
`


function Layout() {


    return (
      <>
      <ul>
        <li>
          <StyleLink to="/createTodo">createToDo</StyleLink>
        </li>
        <li>
          <StyleLink to="/todo">todo</StyleLink>
        </li>
      
      </ul>
      <Outlet />
      </>
        
      
    )
}

export default Layout;