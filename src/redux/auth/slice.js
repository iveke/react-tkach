import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
    name: "login",
    initialState: {
        user: {email: null, username: null },
        token: null,
        isRefresh: false,
        isLogged:false,
    },
    reducers: {

    }
})