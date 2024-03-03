import { Btn, Form, Input, Section, Textrea } from "./FormToDo.style";
import { Component } from "react";

const intialValue = {
  description: "",
  title: "",
  level: "1",
};

class FormLogin extends Component {
  state = intialValue;
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd({...this.state, level: Number(this.state.level)})
    this.setState(intialValue);
  };

  render() {
    return (
      <Form>
        <Input
          name="title"
          type="text"
          placeholder="enter title task"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Textrea
          name="description"
          cols="30"
          rows="4"
          placeholder="enter descriptiton"
          value={this.state.description}
          onChange={this.handleChange}
        ></Textrea>
        <Section
          name="level"
          value={this.state.level}
          onChange={this.handleChange}
        >
          <option value="1"> level 1</option>
          <option value={2}> level 2</option>
          <option value={3}> level 3 </option>
        </Section>
        <Btn onClick={this.handleSubmit}>Add</Btn>
      </Form>
    );
  }
}

export default FormLogin;
