import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPhone } from 'src/types';
import { firstLetterUpperCase, findPhone } from 'src/utils/help';
import { getPhones } from 'src/api/get-phones';

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
      name: {
        first: firstLetterUpperCase(dataPhone.name.first),
        last: firstLetterUpperCase(dataPhone.name.last),
      },
      id: String(new Date().valueOf()),
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('No phone added!');
  }
});

export const deletePhoneThunk = createAsyncThunk<string, { id: string }, { rejectValue: string }>(
  'delete_phone',
  async ({ id }, thunkAPI) => {
    try {
      if (!id) {
        return thunkAPI.rejectWithValue('Phone is not deleted!');
      }
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Phone is not deleted!');
    }
  },
);

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
      name: {
        first: firstLetterUpperCase(dataPhone.name.first),
        last: firstLetterUpperCase(dataPhone.name.last),
      },
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('The phone has not been changed!');
  }
});

export const fetchPhoneThunk = createAsyncThunk<
  TPhone,
  { id: string; listPhones: TPhone[] },
  { rejectValue: string }
>('fetch_phone', async ({ id, listPhones }, thunkAPI) => {
  try {
    const phone = findPhone(await getPhones(), id) || findPhone(listPhones, id);
    if (phone) {
      return phone;
    }
    return thunkAPI.rejectWithValue('Phone is not found!');
  } catch (error) {
    return thunkAPI.rejectWithValue('Page is not found!');
  }
});
