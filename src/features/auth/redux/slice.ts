import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  error: null as null | Error,
};

export type AuthState = typeof initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
