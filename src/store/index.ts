import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/redux/slice';
import listReducer from 'src/features/list-phones/redux/slice';
import phoneReducer from 'src/features/phone/redux/slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    list: listReducer,
    phone: phoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>;

export default store;
