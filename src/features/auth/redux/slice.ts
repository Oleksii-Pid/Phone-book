import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveToketInLocalStorage } from 'src/utils/localStorage';
import { UserData, LoginThunkParams } from '../types';

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const updateUserProfileThunk = createAsyncThunk<UserData,LoginThunkParams>(
  'update_user',
  async ({ emailAddress }, thunkAPI) => {
    try{
      await delay(2000);
      saveToketInLocalStorage(emailAddress);
      return {emailAddress};
    } 
    catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isAuth: false,
  isLoading: false,
  email: '',
  error: null as null | Error,
};

export type AuthState = typeof initialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action){
      state.email = action.payload,
      state.isAuth = true
    },
    removeToken(state){
      state.email = '',
      state.isAuth = false
    }
  },
  extraReducers: builder => {
    builder.addCase(updateUserProfileThunk.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(updateUserProfileThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.emailAddress;
    })
},
});
export const {setToken, removeToken} = authSlice.actions
export default authSlice.reducer;
