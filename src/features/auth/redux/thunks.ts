import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveTokenInLocalStorage } from 'src/utils/localStorage';
import { UserData, FormValues } from 'src/features/auth/types';
import { delay } from 'src/utils/delay';

export const saveTokenThunk = createAsyncThunk<UserData, FormValues, { rejectValue: string }>(
  'save_token',
  async ({ emailAddress }, thunkAPI) => {
    try {
      await delay(2000);
      saveTokenInLocalStorage(emailAddress);
      return { emailAddress };
    } catch (error) {
      return thunkAPI.rejectWithValue('Error server!');
    }
  },
);
