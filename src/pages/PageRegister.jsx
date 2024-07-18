import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/operation";
import { RegisterForm } from "components/Register/Register";

export const Register = () => {
  const dispatch = useDispatch();

  const registerUser = (values) => {
    console.log(values);
    const registerData = {
        "email": values.email,
        "password": values.password,
        "userName": values.userName
    }
    console.log(registerData)
    dispatch(register(registerData));
  };

  return (
    <>
      <RegisterForm register={registerUser} />
    </>
  );
};
