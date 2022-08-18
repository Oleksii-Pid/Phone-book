import { useAppSelector, useAppDispatch } from "src/store";
import { setAuth } from "../redux/slice";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import ROUTES from "src/routes/constants";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.auth);

  const onLogin = useCallback(() => {
    dispatch(setAuth(true));
    navigate(ROUTES.main);
  }, []);

  const onSingOut = useCallback(() => {
    dispatch(setAuth(false));
  }, []);

  return {
    ...state,
    onLogin,
    onSingOut,
  };
}
