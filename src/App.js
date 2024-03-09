// import * as yup from "yup";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import ListToDo from "components/ListToDo/ListToDo.jsx";
import { Component } from "react";
import data from "to-do.json";
import { nanoid } from "nanoid";
import ColorBoxs from "components/ColorBoxs/ColorBoxs";
import Display from "components/ColorBoxs/Display";

const intialColor = "#fff"

class App extends Component {
  state = {
    list: data,
    currentColor: intialColor
  };
  handleChoose = (color)=> {
    this.setState({currentColor: color})
  }
handleReset = ()=> {
  this.setState({currentColor: intialColor})
}
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
        <ColorBoxs onChoose={this.handleChoose}/>
        <Display reset={this.handleReset} color={this.state.currentColor}/>
      </main>
    );
  }
}

export default App;
