import { createSlice } from '@reduxjs/toolkit';
import { fetchListPhonesThunk } from 'src/features/list-phones/redux/thunks';
import { TPhone } from 'src/types';
import { addPhoneThunk, editPhoneThunk, deletePhoneThunk } from 'src/features/phone/redux/thunks';
import { sortListPhones } from 'src/utils/sort-phones';

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

    builder.addCase(addPhoneThunk.pending, (state) => {
      state.error = '';
    });
    builder.addCase(addPhoneThunk.fulfilled, (state, { payload }) => {
      state.listPhones = sortListPhones([...state.listPhones, payload]);
    });
    builder.addCase(addPhoneThunk.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(editPhoneThunk.pending, (state) => {
      state.error = '';
    });
    builder.addCase(editPhoneThunk.fulfilled, (state, { payload }) => {
      state.listPhones = sortListPhones([
        ...state.listPhones.filter((p) => p.id !== payload.id),
        payload,
      ]);
    });
    builder.addCase(editPhoneThunk.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(deletePhoneThunk.pending, (state) => {
      state.error = '';
    });
    builder.addCase(deletePhoneThunk.fulfilled, (state, { payload }) => {
      state.listPhones = state.listPhones.filter((p) => p.id !== payload);
    });
    builder.addCase(deletePhoneThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default listSlice.reducer;
export const { setListPhones } = listSlice.actions;
