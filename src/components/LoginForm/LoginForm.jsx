import { Btn, Forms, Input } from "components/FormToDo/FormToDo.style";
import { Formik } from "formik";
const initial = {
  email: "",
  password: "",
};

export const LoginForm = ({ login }) => {
  return (
    <>
      <Formik
        initialValues={initial}
        onSubmit={(values, { resetForm }) => {
          login(values);
          resetForm();
        }}
      >
        <Forms>
          <Input name="email" type="email" placeholder="user email" />
          <Input name="password" type="password" placeholder="password" />
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    </>
  );
};
