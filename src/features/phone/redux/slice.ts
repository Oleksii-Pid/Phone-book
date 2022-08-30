import { createSlice } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { findPhoneThunk } from 'src/api/find-phone';

const initialState = {
  phone: null as null | TPhone,
  isLoading: false,
  error: null as null | string | undefined,
  isErrorCheck: false,
};

export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findPhoneThunk.pending, (state) => {
      state.isLoading = true;
      state.error = '';
      state.isErrorCheck = true;
    });
    builder.addCase(findPhoneThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.phone = payload;
    });
    builder.addCase(findPhoneThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default phoneSlice.reducer;
