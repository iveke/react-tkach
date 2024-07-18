import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { string } from "yup";

// axios.defaults.baseURL = "https://65f01842da8c6584131ac041.mockapi.io/todoList";

axios.defaults.baseURL = "https://user-api-jqba.onrender.com";

export const fetchToDoId = async (todoId) => {
  const res = await axios.get(`/todos/${todoId}`);
  return res.data;
};

export const fetchToDo = async () => {
  // console.log(axios.defaults.baseURL);
  const res = await axios.get("/todos/");
  return res.data;
};

// export const createToDos = async (todo) => {
//   const res = await axios.post("/", todo);
//   return res.data;
// };

// export const deleteToDo = async (todoId) => {
//   const res = await axios.delete(`/${todoId}`);
//   return res.data;
// };

export const createToDo = createAsyncThunk(
  "todo/addToDoItem",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.post("/todos", arg);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchToDos = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/todos");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const putToDo = createAsyncThunk(
  "todo/changeToDoItem",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.put(`/todos/${arg.id}`, arg);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteToDo = createAsyncThunk(
  "todo/deleteToDoItem",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.delete(`/todos/${arg}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const login = createAsyncThunk("auth/login", async (arg, thunkAPI) => {
//   try {
//     const res = await axios.post("/users/signin", arg);
//     return res;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

// export const register = createAsyncThunk(
//   "auth/register",
//   async (arg, thunkAPI) => {
//     try {
//       const res = await axios.post("/users/signup", arg);
//       return res;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
// try {
//   const res = await axios.post("/users/logout")
//   return res;
// } catch (error) {
  
// }
// })
