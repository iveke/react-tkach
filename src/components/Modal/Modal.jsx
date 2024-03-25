import { Component } from "react";
import { BtnClose, ModalBackground, ModalWindow } from "./Modal.style";

class Modal extends Component{


componentDidMount(){
    window.addEventListener("keydown", this.handleEsc);
    
}
componentWillUnmount(){
    window.removeEventListener("keydown", this.handleEsc)
}

handleEsc =(e)=> {
    if(e.code === "Escape"){
        alert("You really want close a modal window?");
        alert("Really?");
        this.props.onClose();
    }
}
handleClickBg =(e)=> {
    if(e.target == e.currentTarget){
        alert("You really want close a modal window?");
        alert("Really?");
        this.props.onClose();
    }

    
}
    render(){
        const {children, onClose} = this.props;
        return (
            <ModalBackground onClick={this.handleClickBg}>
              <ModalWindow>
                {children}
                <BtnClose onClick={onClose}></BtnClose>
              </ModalWindow>
            </ModalBackground>
          );
    }
  
};
 
export default Modal;