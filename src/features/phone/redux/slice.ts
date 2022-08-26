import { createSlice } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { fetchPhoneThunk } from 'src/api/fetch-phone';

type PhoneState = {
  phone: TPhone;
  isLoading: boolean;
  error: undefined | string;
  isErrorCheck: boolean;
};

const initialState: PhoneState = {
  phone: {
    id: '',
    isActive: false,
    name: {
      first: '',
      last: '',
    },
    phone: '',
    registered: '',
  },
  isLoading: false,
  error: '',
  isErrorCheck: false,
};

export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhoneThunk.pending, (state) => {
      state.isLoading = true;
      state.error = '';
      state.isErrorCheck = true;
    });
    builder.addCase(fetchPhoneThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.phone = payload;
    });
    builder.addCase(fetchPhoneThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default phoneSlice.reducer;
