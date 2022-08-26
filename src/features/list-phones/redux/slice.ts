import { createSlice } from '@reduxjs/toolkit';
import { fetchListPhonesThunk } from 'src/api/fetch-list-phones';
import { TPhone } from 'src/types';

type PhoneState = {
  listPhones: TPhone[];
  isLoading: boolean;
  error: undefined | string;
};

const initialState: PhoneState = {
  listPhones: [],
  isLoading: false,
  error: '',
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListPhones(state, action) {
      state.listPhones = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListPhonesThunk.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchListPhonesThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.listPhones = payload;
    });
    builder.addCase(fetchListPhonesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
export default listSlice.reducer;
export const { setListPhones } = listSlice.actions;
