import { LoginForm } from "components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/operation";

export const Login = () => {
  const dispatch = useDispatch();

  const loginUser = (values) => {
    dispatch(login(values));
  };

  return (
    <>
      <LoginForm login={loginUser} />
    </>
  );
};
