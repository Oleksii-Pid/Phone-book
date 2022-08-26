import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';

export const fetchPhoneThunk = createAsyncThunk<TPhone, string, { rejectValue: string }>(
  'fetch_phone',
  async (id, thunkAPI) => {
    try {
      const response = await fetch('phones.json');
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Error server!');
      }
      const phones = await response.json();
      const phone = phones.find((p: TPhone) => p.id === id);
      if (!phone) {
        return thunkAPI.rejectWithValue('Phone not found!');
      }
      return phone;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error server!');
    }
  },
);
