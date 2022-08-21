import { useAppSelector, useAppDispatch } from "src/store";
import { updateUserProfileThunk }  from "../redux/slice";
import { useCallback } from "react";
import { FormValues } from "../types";
import {setToken, removeToken } from 'src/features/auth/redux/slice';
import { clearLocalStorage, STORAGE_KEYS } from "src/utils/localStorage";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);

  const onLogin = useCallback((data: FormValues) => {
    dispatch(updateUserProfileThunk(data));
  }, [dispatch]);

  const outLogin = useCallback(() => {
    clearLocalStorage(STORAGE_KEYS.token)
    dispatch(removeToken());
  }, [dispatch]);

  const onTokenLogin = useCallback((email:string) => {
    dispatch(setToken(email));
  }, [dispatch]);

  
 
  return {
    ...state,
    onLogin,
    outLogin,
    onTokenLogin
  };
}
