// import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import { Link, Route, Router, Routes } from "react-router-dom";
import CreateTodo from "pages/PageCreateToDo";
import Todo from "pages/PageTodo";
import TodoDetails from "pages/PageTodoDetails";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import { Login } from "pages/PageLogin";
import Account from "components/Account/Account";
import { Register } from "pages/PageRegister";
import { PrivateRoute } from "components/auth/PrivateRoute";
import { BoundingRoute } from "components/auth/BoundingRoute";

// const Home = lazy(()=> import('./pages/Home'));


function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="login" element={<BoundingRoute redirect="/todo" component={Login} />}/> 
          <Route path="register" element={<BoundingRoute redirect="/todo" component={Register} />}/>
          <Route path="account"  element={<PrivateRoute redirect="/login" component={Account} />}/> 
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
