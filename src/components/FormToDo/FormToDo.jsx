import { ErrorMessage, Formik } from "formik";
import { Btn, Input, Section, Textrea } from "./FormToDo.style";
import { Component } from "react";
import { Forms } from "./FormToDo.style";
import * as Yup from "yup";

const intialValue = {
  description: "",
  title: "",
  level: "1",
};

const SignUpSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  description: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  level: Yup.string().oneOf(["1", "2", "3"]).required("Required"),
});

class FormLogin extends Component {
  render() {
    return (
      <Formik
        initialValues={intialValue}
        onSubmit={(values, { resetForm }) => {
          console.log(values, this.props);
          this.props.onAdd({ ...values, level: Number(values.level) });
          resetForm();
        }}
        validationSchema={SignUpSchema}
      >
        <Forms>
          <Input name="title" type="text" />
          <ErrorMessage name="title" component="p" />
          <Textrea name="description" type="text" />
          <Section name="level" as="select">
            <option value="1"> level 1</option>
            <option value="2"> level 2</option>
            <option value="3"> level 3 </option>
          </Section>
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    );
  }
}

export default FormLogin;
