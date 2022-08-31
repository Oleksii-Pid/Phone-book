import { createAsyncThunk } from '@reduxjs/toolkit';

export const deletePhoneThunk = createAsyncThunk<string, { id: string }, { rejectValue: string }>(
  'delete_phone',
  async ({ id }, thunkAPI) => {
    try {
      if (!id) {
        return thunkAPI.rejectWithValue('Phone is not deleted!');
      }
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Phone is not deleted!');
    }
  },
);
