import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewUser } from "../interfaces/INewUser";
import { LoginUser } from "../interfaces/ILoginUser";
import { AuthState } from "./slice";
import { JWT } from "../interfaces/JWT";
axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";
const token = {
  set(token: JWT) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
type state = {
  auth: AuthState;
};

export const logout = createAsyncThunk("/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.patch("/logout");

    token.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error to Logout");
  }
});
export const fetchCurrentUser = createAsyncThunk(
  "/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as state;

    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Not authorized");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error to get current user");
    }
  }
);
export const register = createAsyncThunk(
  "/registration",
  async (user: NewUser, thunkAPI) => {
    try {
      const { data } = await axios.post("/registration", user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register");
    }
  }
);

export const login = createAsyncThunk(
  "/login",
  async (user: LoginUser, thunkAPI) => {
    try {
      const { data } = await axios.post("/login", user);
      if (data) {
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      }
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register");
    }
  }
);
