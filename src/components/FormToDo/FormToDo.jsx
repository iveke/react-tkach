import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Btn, Form, Input, Section, Textrea } from "./FormToDo.style";
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
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm()
        }}
        validationSchema={SignUpSchema}
      >
        <Forms>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="p"/>
          <Field name="description" type="text" />
          <Field name="level" as="select">
            <option value="1"> level 1</option>
            <option value="2"> level 2</option>
            <option value="3"> level 3 </option>
          </Field>
          <button type="submit">Submit</button>
        </Forms>
      </Formik>

      // <Form>
      //   <Input
      //     name="title"
      //     type="text"
      //     placeholder="enter title task"
      //     value={this.state.title}
      //     onChange={this.handleChange}
      //   />
      //   <Textrea
      //     name="description"
      //     cols="30"
      //     rows="4"
      //     placeholder="enter descriptiton"
      //     value={this.state.description}
      //     onChange={this.handleChange}
      //   ></Textrea>
      //   <Section
      //     name="level"
      //     value={this.state.level}
      //     onChange={this.handleChange}
      //   >
      //     <option value="1"> level 1</option>
      //     <option value={2}> level 2</option>
      //     <option value={3}> level 3 </option>
      //   </Section>
      //   <Btn onClick={this.handleSubmit}>Add</Btn>
      // </Form>
    );
  }
}

export default FormLogin;
