import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://user-api-jqba.onrender.com/users"

export const register = createAsyncThunk("auth/register",
async (arg, thunkAPI) => {
    try {
        const res = await axios.post("/users/signup", arg);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const login = createAsyncThunk("auth/login",
async (arg, thunkAPI) => {
    try {
        const res = await axios.post("/users/signin", arg);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const logOut = createAsyncThunk("auth/logOut", async (arh, thunkAPI) => {
const clearAuthHeader = () => {
    axios.defaults.headers.Authorization =``;
}

    try {
        await axios.post("/users/logOut");
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})



export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    const setAuthHeader = (token) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    }
     
    if(persistToken === null){
        return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
        setAuthHeader(persistToken);
        const res = await axios.get('/current');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})