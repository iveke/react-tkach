'use strict'

import { createAction, createSlice } from "@reduxjs/toolkit";

// export const themeReducer = (state = { color: "white" }, action) => {

//   switch (action.type) {
//     case "theme/switch":
//       return {
//         ...state,
//         color: action.payload,
//       };
//     default:
//       break;
//   }
//   return state;
// };

// export const switchTheme = createAction("theme/switch");

const ThemeSlice = createSlice({
    name: 'theme',
initialState: {color: "white"},
reducers: {
        switchTheme(state, action) {return action.payload;}
}
});

export const {switchTheme} = ThemeSlice.actions;
export const themeReducer = ThemeSlice.reducer;
