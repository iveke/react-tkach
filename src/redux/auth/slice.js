import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { login, logOut, refreshUser, register } from "./operation";

const authSlice = createSlice({
  name: "login",
  initialState: {
    user: { email: null, username: null },
    token: null,
    isRefresh: false,
    isLogged: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefresh = false;
      })
      .addCase(register.pending, (state, action) => {
        state.isRefresh = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefresh = false;
        state.isLogged = false;
      })
      .addCase(login.pending, (state, action) => {
        state.isRefresh = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = true;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefresh = false;
        state.isLogged = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { email: null, username: null };
        state.isLogged = false;
        state.token = null;
      }),
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

export const authReducer = authSlice.reducer;

export const authPersisteReducer = persistReducer(persistConfig, authReducer);
