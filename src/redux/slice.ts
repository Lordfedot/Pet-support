import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { DisplayUser } from "../interfaces/IDisplayUser";
import { JWT } from "../interfaces/JWT";
import { register, login } from "./operation";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
interface AuthState extends AsyncState {
  user: DisplayUser | null;
  token: JWT;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload.token;
        state.isAuthenticated = true
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false
      });
  },
});

export const { reset } = authSlice.actions;

export const selectedUser = (state: RootState) => {
  return state.auth;
};

export default authSlice.reducer;
