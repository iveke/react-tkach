import { NavLink, Outlet } from "react-router-dom";
import { Menu, PagesLink, StyleLink } from "./Layout.style";




function Layout() {


    return (
      <>
      <Menu>
      <PagesLink>
          <StyleLink to="/">Home</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/createTodo">createToDo</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/todo">todo</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/login">Login</StyleLink>
        </PagesLink>
      
      </Menu>
      <Outlet />
      </>
        
      
    )
}

export default Layout;