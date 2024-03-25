import { Formik } from "formik";
import { Btn, ErrorMess, Input, Section, Textrea } from "./FormToDo.style";
import { Component } from "react";
import { Forms } from "./FormToDo.style";
import * as Yup from "yup";

const intialValue = {
  description: "",
  title: "",
  level: "1",
};

const SignUpSchema = Yup.object().shape({
  title: Yup.string().min(2, "Shortly!").max(20, "Longly").required("Required"),
  description: Yup.string().min(2, "Shortly!").max(50, "Longly"),
  level: Yup.string().oneOf(["1", "2", "3"]).required("Required"),
});

class FormLogin extends Component {
  state = {
    values: "",
  };
  componentDidMount() {
    const savedValues = localStorage.getItem("formValues");
    const parseSavedValues = JSON.parse(savedValues);
    console.log(parseSavedValues);
    // if(parseSavedValues){
    //   this.setState({values: parseSavedValues});
    // }
  }
  componentDidUpdate(prevState) {
    // if(prevState.values !== this.state.values){
    //   localStorage.setItem("formValues", JSON.stringify(this.state.values));
    // }
  }
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
          <ErrorMess name="title" component="p" />
          <Textrea name="description" type="text" />
          <ErrorMess name="description" component="p" />
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
