import { createAsyncThunk } from '@reduxjs/toolkit';
import { sortListPhones } from 'src/api/sort-phones';

export type TPhone = {
  id: string;
  isActive: boolean;
  age?: number;
  name: {
    first: string;
    last: string;
  };
  company?: string;
  email?: string;
  phone: string;
  address?: string;
  registered: string;
};

export const uploadPhonesThunk = createAsyncThunk<TPhone[]>('save_phones', async (_, thunkAPI) => {
  try {
    const response = await fetch('phones.json');
    const phones = await response.json();
    const sortPhones = sortListPhones(phones);
    return sortPhones;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
