import { accountReducer } from "./slice/AccountSlice";
import { themeReducer } from "./slice/ThemeSlice";
import { todoReducer } from "./slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

const initialStore = {
  // account: {
  //   balance: 10,
  // },
  // theme: {
  //   color: "white",
  // },
  todos: {
    list: [],
  },
  form: {
    title: "",
    level: "all",
  },
};

const myMiddleware = (store) => {
  return function (next) {
    return function (action) {
      console.log(action.meta)
      console.log("myMiddleWare", action);
      next(action)
    };
  };
};

const myMiddleware2 = (store) => {
  return function (next) {
    return function (action) {
     
      console.log("myMiddleWare", action);
      next(action)
    };
  };
};

const myMiddleWare1 =(store)=>(next)=>(action)=>{
  console.log("myMiddleware2", action);
  next(action)
}

// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: {
    account: accountReducer,
    theme: themeReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleWare) => {
    const middleware = getDefaultMiddleWare();
    console.log(middleware);
    return[...middleware, myMiddleware, myMiddleWare1,myMiddleware2];
  },
});

// case "todos/upload":
//   return {
//     ...state,
//     todos: { ...state, list: action.payload },
//   };
// case "todos/delete":
//   return {
//     ...state,
//     todos: {
//       ...state,
//       list: state.todos.list.filter((item) => item.id !== action.payload),
//     },
//   };

//   case "form/title":
//     return { ...state, form: { ...state.form, title: action.payload } };
//   case "form/level":
//     return { ...state, form: { ...state.form, level: action.payload } };
