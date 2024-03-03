// import * as yup from "yup";
import Clicker from "components/BtnStep/BtnStep";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import ListToDo from "components/ListToDo/ListToDo.jsx";
import { Component } from "react";
import data from "to-do.json";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    list: data,
  };
  handleDeleteItem = (deleteId) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== deleteId),
    }));
    
  };
  handleAddItem = (item)=>{
this.setState((prevState)=> ({list: [...prevState.list, {...item, id: nanoid(), status: false}]
}))
  }
  render() {
    return (
      <main style={{ padding: 50 }}>
        <FormLogin onAdd={this.handleAddItem}/>
        <ListToDo list={this.state.list} onDelete={this.handleDeleteItem} />
        <Clicker />
      </main>
    );
  }
}

export default App;
