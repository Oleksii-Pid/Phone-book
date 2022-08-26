import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchPhoneThunk } from 'src/api/fetch-phone';

function usePhone() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.phone);

  const fetchPhone = useCallback(
    (id: string) => {
      dispatch(fetchPhoneThunk(id));
    },
    [dispatch],
  );
  return {
    ...state,
    fetchPhone,
  };
}
export default usePhone;
