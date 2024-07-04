// import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import { Link, Route, Router, Routes } from "react-router-dom";
import CreateTodo from "pages/PageCreateToDo";
import Todo from "pages/PageTodo";
import TodoDetails from "pages/PageTodoDetails";
import Layout from "components/Layout/Layout";
// import Home from "pages/Home";
import { lazy } from "react";

const Home = lazy(()=> import('./pages/Home'));


function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="createTodo" element={<CreateTodo />} />
          <Route path="todo" element={<Todo />} />
          <Route path="todo/:id" element={<TodoDetails />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    
      <Toaster />
    </>
  );
}

export default App;
