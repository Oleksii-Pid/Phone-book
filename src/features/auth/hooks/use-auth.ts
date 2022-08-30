import { useAppSelector, useAppDispatch } from 'src/store';
import { saveTokenThunk } from 'src/api/save-token';
import { useCallback } from 'react';
import { FormValues } from '../types';
import { setToken, removeToken, setAuthReady } from 'src/features/auth/redux/slice';
import { clearLocalStorage, STORAGE_KEYS } from 'src/utils/localStorage';
import { useList } from 'src/hooks';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);
  const { saveChangedListPhones, fetchPhones } = useList();

  const onLogin = useCallback(
    (data: FormValues) => {
      fetchPhones();
      dispatch(saveTokenThunk(data));
    },
    [dispatch],
  );
  const onAuthReady = useCallback(() => {
    dispatch(setAuthReady());
  }, [dispatch]);

  const onLogout = useCallback(() => {
    saveChangedListPhones([]);
    clearLocalStorage(STORAGE_KEYS.token);
    dispatch(removeToken());
  }, [dispatch]);

  const onTokenLogin = useCallback(
    (email: string) => {
      dispatch(setToken(email));
    },
    [dispatch],
  );

  return {
    ...state,
    onLogin,
    onLogout,
    onTokenLogin,
    onAuthReady,
  };
}
