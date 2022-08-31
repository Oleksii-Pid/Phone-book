import { createSlice } from '@reduxjs/toolkit';
import { saveTokenThunk } from 'src/features/auth/redux/thunks/save-token';

const initialState = {
  isAuth: false,
  isLoading: false,
  isAuthReady: false,
  email: '',
  error: null as undefined | string | null,
};

export type AuthState = typeof initialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.email = action.payload;
      state.isAuth = true;
    },
    removeToken(state) {
      state.email = '';
      state.isAuth = false;
    },
    setAuthReady(state) {
      state.isAuthReady = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveTokenThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(saveTokenThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.emailAddress;
    });
    builder.addCase(saveTokenThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export const { setToken, removeToken, setAuthReady } = authSlice.actions;
export default authSlice.reducer;
