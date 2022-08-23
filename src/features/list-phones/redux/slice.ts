import { createSlice } from '@reduxjs/toolkit';
import { uploadPhonesThunk, TPhone } from 'src/api/upload-phones';

type PhoneState = {
  listPhones: TPhone[];
  isLoading: boolean;
};

const initialState: PhoneState = {
  listPhones: [],
  isLoading: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadPhonesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadPhonesThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listPhones = payload;
    });
  },
});
export default listSlice.reducer;
