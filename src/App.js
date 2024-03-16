// import * as yup from "yup";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import ListToDo from "components/ListToDo/ListToDo.jsx";
import { Component } from "react";
import data from "to-do.json";
import { nanoid } from "nanoid";
import ColorBoxs from "components/ColorBoxs/ColorBoxs";
import Display from "components/ColorBoxs/Display";
import Modal from "components/Modal/Modal.jsx";

const intialColor = "#fff";

const TextContent = () => {
  return (
    <>
      <h2>Hi Frodo</h2>
      <p>
        LorSKFKSJHFJSHJKF SJFKJSFJHSDJFHSD SDJFH SDHFKHAFH SDHJFHSDJ FSAJ
        KDHSFJKAHFJHSFSD KJDSHFJKS
      </p>
    </>
  );
};

class App extends Component {
  state = {
    list: data,
    currentColor: intialColor,
    showModal: false,
  };

  componentDidMount() {
    const data = localStorage.getItem("todo");
    const parseDate = JSON.parse(data);
    if (parseDate) {
      this.setState({ list: parseDate });
    }
    const savedColor = localStorage.getItem("displayColor");
    const parseSavedColor = JSON.parse(savedColor);
    if(parseSavedColor){
      this.setState({currentColor: parseSavedColor});
    }
  }

  componentDidUpdate( prevState) {
    if (prevState.list !== this.state.list) {
      localStorage.setItem("todo", JSON.stringify(this.state.list));
    }
    if(prevState.currentColor !== this.state.currentColor){
      localStorage.setItem(
        "displayColor",
        JSON.stringify(this.state.currentColor)
      );
    }
    
  }
  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };
  handleChoose = (color) => {
    this.setState({ currentColor: color });
  };
  handleReset = () => {
    this.setState({ currentColor: intialColor });
  };
  handleDeleteItem = (deleteId) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== deleteId),
    }));
  };
  handleAddItem = (item) => {
    this.setState((prevState) => ({
      list: [...prevState.list, { ...item, id: nanoid(), status: false }],
    }));
  };
  render() {
    return (
      <main style={{ padding: 50 }}>
        <button type="button" onClick={this.toggleModal}>
          OpenModal
        </button>
        <FormLogin onAdd={this.handleAddItem} />
        <ListToDo list={this.state.list} onDelete={this.handleDeleteItem} />
        <ColorBoxs onChoose={this.handleChoose} />
        <Display reset={this.handleReset} color={this.state.currentColor} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <TextContent></TextContent>
          </Modal>
        )}
      </main>
    );
  }
}

export default App;
