import { createAction, createSlice } from "@reduxjs/toolkit";
import { modal } from "../actions";
import { createToDo, deleteToDo, fetchToDos, putToDo } from "service/api";
import CreateTodo from "pages/PageCreateToDo";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
    showModal: false,
    changeItem: {},
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchToDos.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteToDo.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.isLoading = false;

        state.list = state.list.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(modal, (state, action) => {
        state.showModal = !state.showModal;
        state.changeItem = action.payload;
      })
      .addCase(putToDo.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(putToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = state.list.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          item = action.payload;
          return item;
        });
      })
      .addCase(putToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(createToDo.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(createToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});
// export const { changeList, deleteItemList } = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;

// reducers: {
//     changeList(state, action){return action.payload},
//     deleteItemList(state,action){state.filter((item)=> item.id !== action.payload)}
// }
