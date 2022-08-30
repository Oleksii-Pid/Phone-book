import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { delay } from './save-token';

export const findPhoneThunk = createAsyncThunk<
  TPhone,
  { id: string; listPhones: TPhone[] },
  { rejectValue: string }
>('find_phone', async ({ id, listPhones }, thunkAPI) => {
  try {
    await delay(500);
    const phone = listPhones.find((p: TPhone) => p.id === id);
    if (!phone) {
      return thunkAPI.rejectWithValue('Phone is not found!');
    }
    return phone;
  } catch (error) {
    return thunkAPI.rejectWithValue('Page is not found!');
  }
});
