import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchPhoneThunk } from 'src/features/phone/redux/thunks';
import { useList } from 'src/hooks';
import { setInitialState } from '../redux/slice';

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
  const clearStatePhone = useCallback(() => {
    dispatch(setInitialState());
  }, [dispatch]);

  return {
    ...state,
    fetchPhone,
    clearStatePhone,
  };
}
export default usePhone;
