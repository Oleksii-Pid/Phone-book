import {useAppSelector, useAppDispatch} from "src/store";
import {setAuth} from "../redux/slice";
import {useCallback} from "react";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.auth);

  const onLogin = useCallback(() => {
    dispatch(setAuth(true));
  }, []);

  return {
    ...state,
    onLogin,
  };
}
