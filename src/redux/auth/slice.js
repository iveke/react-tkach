import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { refreshUser } from "./operation";


 const authSlice = createSlice({
    name: "login",
    initialState: {
        user: {email: null, username: null },
        token: null,
        isRefresh: false,
        isLogged:false,
    },
extraReducers: (builder) => 
builder.addCase(refreshUser.pending, (state, action) => {
    state.isRefresh = true;
}).addCase(refreshUser.fulfiled, (state, action) => {
    state.user = action.payload;
    state.isLogged = true;
    state.isRefresh = false;
}).addCase(refreshUser.rejected, (state, action) => {
    state.isRefresh = false;
}).addCase(register.fullfiled, (state, action)=> {
    state.user = action.payload.user;
    state.isLogged = true;
    state.token = action.payload.token;
}).addCase(login.fullfiled, (state, action)=> {
    state.user = action.payload.user;
    state.isLogged = true;
    state.token = action.payload.token;
}).addCase(logOut.fullfiled, (state, action)=> {
    state.user = initialState.user;
    state.isLogged = false;
    state.token = null;
})
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
}



export const authReducer = authSlice.reducer;

export const authPersisteReducer = persistReducer(persistConfig, authReducer);