// import persistStore from "redux-persist/es/persistStore";
import { accountPersistedReducer } from "./slice/AccountSlice";
import { themeReducer } from "./slice/ThemeSlice";
import { todoReducer } from "./slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { authPersisteReducer } from "./auth/slice";



// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: {
    account: accountPersistedReducer,
    theme: themeReducer,
    todos: todoReducer,
    auth: authPersisteReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persister = persistStore(store);

