import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { firstLetterUpperCase } from 'src/utils/help';

export const addPhoneThunk = createAsyncThunk<
  TPhone,
  { dataPhone: Omit<TPhone, 'id'>; callback: () => void },
  { rejectValue: string }
>('add_phone', async ({ dataPhone, callback }, thunkAPI) => {
  try {
    if (!dataPhone) {
      return thunkAPI.rejectWithValue('No phone added!');
    }
    callback();
    return {
      ...dataPhone,
      first: firstLetterUpperCase(dataPhone.name.first),
      last: firstLetterUpperCase(dataPhone.name.last),
      id: String(new Date().valueOf()),
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('No phone added!');
  }
});
