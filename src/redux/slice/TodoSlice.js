import { createAction, createSlice } from "@reduxjs/toolkit";

// export const todoReducer = (state = { list: [] }, action) => {
//   switch (action.type) {
//     case "todos/upload":
//       return {
//         ...state,
//         list: action.payload,
//       };
//     case "todos/delete":
//       return {
//         ...state,
//         todos: {
//           ...state,
//           list: state.todos.list.filter((item) => item.id !== action.payload),
//         },
//       };
//     default:
//       break;
//   }
//   return state;
// };

// export const changeList = createAction("todos/upload");
// export const deleteItemList = createAction("todos/delete");


const TodoSlice = createSlice({
    name: "todo",
    initialState: {list:[]},
    reducers: {
        changeList(state, action){return action.payload},
        deleteItemList(state,action){state.filter((item)=> item.id !== action.payload)}
    }
})
export const {changeList,deleteItemList} = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;