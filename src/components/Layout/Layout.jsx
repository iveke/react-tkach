import { Outlet } from "react-router-dom";
import { Menu, PagesLink, StyleLink } from "./Layout.style";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operation";


function Layout() {
  const dispatch = useDispatch()
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
        <PagesLink>
          <StyleLink to="/register">Register</StyleLink>
        </PagesLink>
        <PagesLink>
          <StyleLink to="/account">Account</StyleLink>
        </PagesLink>
        <button onClick={()=>dispatch(logOut)}>Log out</button>

      </Menu>
      <Outlet />
    </>
  );
}

export default Layout;
