import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewUser } from "../interfaces/INewUser";
import { LoginUser } from "../interfaces/ILoginUser";

axios.defaults.baseURL = "https://pet-support-6z4x.onrender.com";
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};


export const register = createAsyncThunk(
  "registration",
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
        console.log(data);

        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to register");
    }
  }
);
