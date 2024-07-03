import { Field, Formik } from "formik";
import { Btn, ErrorMess, Input, Section, Textrea } from "./FormToDo.style";
import { Component } from "react";
import { Forms } from "./FormToDo.style";
import * as Yup from "yup";

const intialValue = {
  description: "",
  title: "",
  level: "easy",
};

const options = [
  {value: "easy", label: "easy"},
  {value: "middle", label: "middle"},
  {value: "hard", label: "hard"}

]

const SignUpSchema = Yup.object().shape({
  title: Yup.string().min(2, "Shortly!").max(20, "Longly").required("Required"),
  description: Yup.string().min(2, "Shortly!").max(50, "Longly"),
  level: Yup.string().oneOf(["easy", "middle", "hard"]).required("Required"),
});

class FormLogin extends Component {
  render() {
    return (
      <Formik
        initialValues={intialValue}
        onSubmit={(values, { resetForm }) => {

          this.props.onAdd(values);
          resetForm();
        }}
        validationSchema={SignUpSchema}
      >
        <Forms>
          <Input name="title" type="text" />
          <ErrorMess name="title" component="p" />
          <Textrea name="description" type="text" />
          <ErrorMess name="description" component="p" />
          <Field name="level" as={Section}>
            <option value="easy">easy</option>
            <option value="middle">middle</option>
            <option value="hard">hard</option>
          </Field>
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    );
  }
}

export default FormLogin;
