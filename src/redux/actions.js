import { createAction, createReducer } from "@reduxjs/toolkit";


export const titleOnChange = (value) => {
  return {
    type: "form/title",
    payload: value,
  };
};
export const levelOnChange = (value) => {
    return {
      type: "form/level",
      payload: value,
    };
  };


  export const modal = createAction("todo/modal")
// EXAMPLE REDUX

// export const addTask = (value) => {
//   return{ 
//     type: "list/add",
//     payload: value,
//   }
// }
// export const deleteTask = (value) => {
//   return {
//     type: "list/delete",
//     payload: value,
//   }
// }
// const initialState = [];

// const listReducer = (state = initialState , action) => {
//   switch(action.type){
//     case "list/add":
//       return [...state, action.payload];
//     case "list/delete": 
//       return state.filter((item)=> item.id !== action.payload.id);
//       default: break;
//   }
// }

// //  EXAMPLE REDUX TOOLKIT



// const addTask1 = createAction("list/add");
// const deleteTask1 = createAction("list/delete")

// const listReducer1 = createReducer(initialState, (builder)=> 
//   builder.addCase(addTask1, (state, action)=>{state.push(action.payload)}
// ).addCase(addTask1, (state, action)=> {state.splice(state.findIndex(({id})=> id === action.payload.id) ,1)}

// ))
