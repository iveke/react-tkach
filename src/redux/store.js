// import persistStore from "redux-persist/es/persistStore";
import { accountReducer } from "./slice/AccountSlice";
import { themeReducer } from "./slice/ThemeSlice";
import { todoReducer } from "./slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { loginReducer } from "./auth/slice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['balance'],
}

const accountPersistedReducer = persistReducer(persistConfig, accountReducer)


const myMiddleware = (store) => {
  return function (next) {
    return function (action) {

      next(action)
    };
  };
};


// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: {
    account: accountPersistedReducer,
    theme: themeReducer,
    todos: todoReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persister = persistStore(store);

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
