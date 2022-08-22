import { useAppSelector, useAppDispatch } from "src/store";
import { saveTokenThunk }  from "src/api/save-token";
import { useCallback } from "react";
import { FormValues } from "../types";
import { setToken, removeToken } from 'src/features/auth/redux/slice';
import { clearLocalStorage, STORAGE_KEYS } from 'src/utils/localStorage';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);

  const onLogin = useCallback((data: FormValues) => {
    dispatch(saveTokenThunk(data));
  }, [dispatch]);

    const onLogout = useCallback(() => {
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
    onTokenLogin
  };
}
