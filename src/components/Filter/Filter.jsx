
import { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Btn, ErrorMess, Forms, Input, Section } from "components/FormToDo/FormToDo.style";


const intialValue = {
    title: "",
    level: "1",
  };

const SignUpSchema = Yup.object().shape({
    title: Yup.string().min(2, "Shortly!").max(20, "Longly").required("Required"),
    level: Yup.string().oneOf(["1", "2", "3"]).required("Required"),
  });

class FilterForm extends Component {
  render(){
    return (
    <Formik
        initialValues={intialValue}
        onSubmit={(values, { resetForm }) => {
          this.props.onFilter(values);
          resetForm();
        }}
        validationSchema={SignUpSchema}
      >
        <Forms>
            <h2>Filter</h2>
          <Input name="title" type="text" />
          <ErrorMess name="title" component="p" />
          <Section name="level" as="select">
            <option value="1"> level 1</option>
            <option value="2"> level 2</option>
            <option value="3"> level 3 </option>
          </Section>
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    )
  }
}


export default FilterForm;