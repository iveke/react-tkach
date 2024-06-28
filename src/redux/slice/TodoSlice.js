import { createAction, createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: "todo",
    initialState: {list:[],
    isLoading: false, 
error: null},
    extraReducers: (builder) => builder.addCase(),
})
export const {changeList,deleteItemList} = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;


// reducers: {
//     changeList(state, action){return action.payload},
//     deleteItemList(state,action){state.filter((item)=> item.id !== action.payload)}
// }