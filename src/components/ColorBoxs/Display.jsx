import { Component } from "react";
import { ColorDisplay } from "./Display.style";

class Display extends Component {

    
  
  render() {
    return (
      <>
      
        <ColorDisplay background={this.props.color}></ColorDisplay>
        <button onClick={()=> {
            this.props.reset();
        }}>Reset</button>
      </>
    );
  }
}


export default Display;