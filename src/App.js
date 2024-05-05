// import * as yup from "yup";

import Modal from "components/Modal/Modal.jsx";
import { createToDo, deleteToDo, fetchToDo } from "service/api";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import FilterForm from "components/Filter/Filter";
import { useState } from "react";
import { FormTest } from "components/FormToDo/FormTest";
import { Link, Route, Router, Routes } from "react-router-dom";
import CreateTodo from "pages/PageCreateToDo";
import Todo from "pages/PageTodo";
import TodoDetails from "pages/PageTodoDetails";

const intialColor = "#fff";


function App() {
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState({ title: "", level: "all" });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const toggleModal = () => {
    setShowModal((prevShowModal) => {
      return !prevShowModal;
    });
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/createTodo">createToDo</Link>
        </li>
        <li>
          <Link to="/todo">todo</Link>
        </li>
      </ul>

      <Routes>
        <Route path="createTodo" element={<CreateTodo />} />
        <Route path="todo" element={<Todo />} />
        <Route path="todo/:id" element={<TodoDetails />} />
      </Routes>
      <main style={{ padding: 50 }}>
        <button type="button" onClick={toggleModal}>
          OpenModal
        </button>
        <Toaster />
      </main>
    </div>
  );
}

export default App;
