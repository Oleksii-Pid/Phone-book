import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { firstLetterUpperCase } from 'src/utils/help';

export const editPhoneThunk = createAsyncThunk<
  TPhone,
  { dataPhone: TPhone; callback: () => void },
  { rejectValue: string }
>('edit_phone', async ({ dataPhone, callback }, thunkAPI) => {
  try {
    if (!dataPhone) {
      return thunkAPI.rejectWithValue('The phone has not been changed!');
    }
    callback();
    return {
      ...dataPhone,
      first: firstLetterUpperCase(dataPhone.name.first),
      last: firstLetterUpperCase(dataPhone.name.last),
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('The phone has not been changed!');
  }
});
