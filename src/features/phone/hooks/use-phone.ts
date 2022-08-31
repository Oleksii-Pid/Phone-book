import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchPhoneThunk } from 'src/features/phone/redux/thunks/fetch-phone';
import { useList } from 'src/hooks';

function usePhone() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.phone);
  const { listPhones } = useList();

  const fetchPhone = useCallback(
    (id: string) => {
      dispatch(fetchPhoneThunk({ id, listPhones }));
    },
    [dispatch],
  );
  return {
    ...state,
    fetchPhone,
  };
}
export default usePhone;
