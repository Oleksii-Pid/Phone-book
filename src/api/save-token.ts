import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveTokenInLocalStorage } from 'src/utils/localStorage';
import { UserData, LoginThunkParams } from 'src/features/auth/types';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const saveTokenThunk = createAsyncThunk<UserData, LoginThunkParams, { rejectValue: string }>(
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
