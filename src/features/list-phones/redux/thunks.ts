import { createAsyncThunk } from '@reduxjs/toolkit';
import { sortListPhones } from 'src/utils/sort-phones';
import { TPhone } from 'src/types';
import { getPhones } from 'src/api/get-phones';

export const fetchListPhonesThunk = createAsyncThunk<
  TPhone[],
  undefined,
  { rejectValue: string | null }
>('fetch_list_phones', async (_, thunkAPI) => {
  try {
    return sortListPhones(await getPhones());
  } catch (error) {
    console.dir(error);
    return thunkAPI.rejectWithValue('Page is not found!');
  }
});
