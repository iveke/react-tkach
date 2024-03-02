import { Component } from "react";

class Clicker extends Component {

state = {
    value: 0,
}

    handlerClick = ()=> {
      for (let index = 0; index < 3; index++) {
        this.setState((prevState) => (
          {value: prevState.value + 1}
        ));
        console.log(this.state);
      }
        // this.setState((prevState)=> ({value: prevState + 1}))
    }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button type="button" onClick={()=>{this.handlerClick(10)}}>+</button>
        <button type="button" onClick={()=>{this.handlerClick(1)}}>-</button>
      </div>
    );
  }
}

export default Clicker;
