import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPhones } from 'src/api/get-phones';
import { TPhone } from 'src/types';
import { findPhone } from 'src/utils/help';

export const fetchPhoneThunk = createAsyncThunk<
  TPhone,
  { id: string; listPhones: TPhone[] },
  { rejectValue: string }
>('fetch_phone', async ({ id, listPhones }, thunkAPI) => {
  try {
    const phone = findPhone(listPhones, id) || findPhone(await getPhones(), id);
    if (phone) {
      return phone;
    } else {
      return thunkAPI.rejectWithValue('Phone is not found!');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue('Page is not found!');
  }
});
