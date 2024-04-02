// import * as yup from "yup";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import ListToDo from "components/ListToDo/ListToDo.jsx";
import { Component, useEffect } from "react";
import data from "to-do.json";
import { nanoid } from "nanoid";
import ColorBoxs from "components/ColorBoxs/ColorBoxs";
import Display from "components/ColorBoxs/Display";
import Modal from "components/Modal/Modal.jsx";
import { DisplayItem } from "components/ListToDo/ListToDo.style";
import { createToDo, deleteToDo, fetchToDo, filterToDo } from "service/api";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import FilterForm from "components/Filter/Filter";
import { useState } from "react";

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

function App() {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( async () => {
    try {
      const res = await fetchToDo();
      setList({ list: res });
      setIsLoading({ isLoading: true });
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading({ isLoading: false });
    }
  }, []);
  // useEffect((prevState)=> {
  //   if (prevState.list !== list) {
  //     localStorage.setItem("todo", JSON.stringify(list));
  //   }
  // }, [list]);

  // const toggleModal = () => {
  //   setShowModal((prevShowModal) => {
  //     showModal: !(prevShowModal);
  //   });
  // };
  const handleDeleteItem = async (deleteId) => {
    try {
      setIsLoading({ isLoading: true });
      setError({ error: null });

      const deleteToDoItem = await deleteToDo(deleteId);
      // setList((prevState) => {
      //   list: prevState.filter((item) => item.id !== deleteToDoItem.id);
      // });

      toast.success("ToDo delete success");
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading({ isLoading: false });
    }
  };
  const handleAddItem = async (item) => {
    try {
      setIsLoading({ isLoading: true });
      setError({ error: null });
      const addToDo = await createToDo(item);
      // setList((prevState) => {
      //   list: [...prevState, addToDo];
      // });

      toast.success("ToDo added success");
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading({ isLoading: false });
    }
  };
  const handleFilter = ({ title, level }) => {
    console.log(title, level);
  };

  return (
    <main style={{ padding: 50 }}>
      <button type="button" >
        OpenModal
      </button>
      <FormLogin onAdd={handleAddItem} />
      <FilterForm onFilter={handleFilter} />

      {isLoading && <Loader />}
      {list.length > 0 && <ListToDo list={list} onDelete={handleDeleteItem} />}
      {/* <Loader /> */}

      {/* <ColorBoxs onChoose={this.handleChoose} />
<Display reset={this.handleReset} color={this.state.currentColor} /> */}
      {showModal && (
        <Modal >
          <TextContent></TextContent>
        </Modal>
      )}
      <Toaster />
    </main>
  );
}

// class App extends Component {
//   state = {
//     list: [],
//     currentColor: intialColor,
//     showModal: false,
//     isLoading: false,
//     error: null,
//   };

//   async componentDidMount() {
//     try {
//       const res = await fetchToDo();
//       this.setState({ list: res, isLoading: true });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//     // const savedColor = localStorage.getItem("displayColor");
//     // const parseSavedColor = JSON.parse(savedColor);
//     // if(parseSavedColor){
//     //   this.setState({currentColor: parseSavedColor});
//     // }
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.list !== this.state.list) {
//       localStorage.setItem("todo", JSON.stringify(this.state.list));
//     }
//     if (prevState.currentColor !== this.state.currentColor) {
//       localStorage.setItem(
//         "displayColor",
//         JSON.stringify(this.state.currentColor)
//       );
//     }
//   }
//   toggleModal = () => {
//     this.setState((prevState) => ({ showModal: !prevState.showModal }));
//   };
//   handleChoose = (color) => {
//     this.setState({ currentColor: color });
//   };
//   handleReset = () => {
//     this.setState({ currentColor: intialColor });
//   };
//   handleDeleteItem = async (deleteId) => {
//     try {
//       this.setState({ isLoading: true, error: null });
//       const deleteToDoItem = await deleteToDo(deleteId);
//       this.setState((prevState) => ({
//         list: prevState.list.filter((item) => item.id !== deleteToDoItem.id),
//       }));
//       toast.success("ToDo delete success");
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };
//   // handleClickItem = () => {};
//   handleAddItem = async (item) => {
//     try {
//       this.setState({ isLoading: true, error: null });
//       const addToDo = await createToDo(item);
//       this.setState((prevState) => ({
//         list: [...prevState.list, addToDo],
//       }));
//       toast.success("ToDo added success");
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleFilter = ({ title, level }) => {
//     console.log(title, level);

//     // const filterList = this.state.list.filter((item) => (item.title = title));
//   };

//   render() {
//     const { isLoading, list, showModal } = this.state;
//     return (
//       <main style={{ padding: 50 }}>
//         <button type="button" onClick={this.toggleModal}>
//           OpenModal
//         </button>
//         <FormLogin onAdd={this.handleAddItem} />
//         <FilterForm onFilter={this.handleFilter} />

//         {isLoading && <Loader />}
//         {list.length > 0 && (
//           <ListToDo list={list} onDelete={this.handleDeleteItem} />
//         )}
//         {/* <Loader /> */}

//         {/* <ColorBoxs onChoose={this.handleChoose} />
//         <Display reset={this.handleReset} color={this.state.currentColor} /> */}
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TextContent></TextContent>
//           </Modal>
//         )}
//         <Toaster />
//       </main>
//     );
//   }
// }

export default App;
