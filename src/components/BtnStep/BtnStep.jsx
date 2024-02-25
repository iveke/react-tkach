import { Component } from "react";

class Clicker extends Component {

state = {
    value: 0,
}

    handlerClick = (val)=> {
        this.setState((prevState)=> ({value: prevState + val}))
    }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button type="button" onClick={()=>{this.handlerClick("+")}}>+</button>
        <button type="button" onClick={()=>{this.handlerClick("-")}}>-</button>
      </div>
    );
  }
}

export default Clicker;
