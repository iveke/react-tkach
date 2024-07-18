import { Btn, Forms, Input } from "components/FormToDo/FormToDo.style";
import { Formik } from "formik";
const initial = {
  email: "",
  password: "",
  userName: "",
};

export const RegisterForm = ({ register }) => {
  return (
    <>
      <Formik
        initialValues={initial}
        onSubmit={(values, { resetForm }) => {
          register(values);
          resetForm();
        }}
      >
        <Forms>
          <Input name="email" type="email" placeholder="email"/>
          <Input name="password" type="password" placeholder="password"/>
          <Input name="userName" type="text" placeholder="username"/>
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    </>
  );
};
