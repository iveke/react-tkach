import { Form, Input } from "./FormToDo.style";
import { Component } from "react";

class FormLogin extends Component {
  state = {
    email: "",
    name: "",
    title: "",
    agree: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };
  handleChangeCheckBox = (e) => {
    this.setState({agree: e.target.checked})
  }

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
        <textarea
          name="description"
          cols="30"
          rows="4"
          placeholder="enter descriptiton"
        ></textarea>
        <select name="level">
          <option value="1"> level 1</option>
          <option value="2"> level 2</option>
          <option value="3"> level 3 </option>
        </select>
        
            <Input type="checkbox"  value={this.state.agree} onChange={this.handleChangeCheckBox}/>
      </Form>
    );
  }
}

export default FormLogin;
