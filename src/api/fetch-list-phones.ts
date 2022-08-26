import { createAsyncThunk } from '@reduxjs/toolkit';
import { sortListPhones } from 'src/api/sort-phones';
import { TPhone } from 'src/types';

export const fetchListPhonesThunk = createAsyncThunk<TPhone[], undefined, { rejectValue: string }>(
  'fetch_list_phones',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('phones.json');
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Server error!');
      }
      const phones = await response.json();
      return sortListPhones(phones);
    } catch (error) {
      return thunkAPI.rejectWithValue('Page is not found!');
    }
  },
);
