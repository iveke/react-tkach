import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65f01842da8c6584131ac041.mockapi.io/todoList";

export const fetchToDoId = async (todoId) => {
  const res = await axios.get(`/${todoId}`);
  return res.data;
};

export const fetchToDo = async () => {
  // console.log(axios.defaults.baseURL);
  const res = await axios.get("/");
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
  "todo/addToDoItem", async (arg, thunkAPI) => {
    try {
      const res = await axios.post("/", arg);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const fetchToDos = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/");
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
      const res = await axios.put(`/${arg.id}`, arg);
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
      const res = await axios.delete(`/${arg}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
