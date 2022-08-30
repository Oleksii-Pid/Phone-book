import { createSlice } from '@reduxjs/toolkit';
import { fetchListPhonesThunk } from 'src/api/fetch-list-phones';
import { TPhone } from 'src/types';

const initialState = {
  listPhones: [] as TPhone[],
  isLoading: false,
  error: null as null | string | undefined,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListPhones(state, action) {
      state.listPhones = action.payload;
    },
    pushPhone(state, action) {
      state.listPhones.push(action.payload);
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
export const { setListPhones, pushPhone } = listSlice.actions;
