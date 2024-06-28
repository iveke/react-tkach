import { createAction, createSlice } from "@reduxjs/toolkit";
import { deleteToDo, fetchToDos } from "service/api";

const TodoSlice = createSlice({
  name: "todo",
  initialState: { list: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchToDos.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
        state.list = action.payload;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(deleteToDo.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload)
        state.list = action.payload;
      })
      .addCase(deleteToDo.rejected, (state, action) => {
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
