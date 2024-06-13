import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { accountReducer } from "./slice/AccountSlice";
import { themeReducer } from "./slice/ThemeSlice";
import { todoReducer } from "./slice/TodoSlice";

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

const rootReducer = combineReducers({
  account: accountReducer,
  theme: themeReducer,
  todos: todoReducer,
})
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);


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
