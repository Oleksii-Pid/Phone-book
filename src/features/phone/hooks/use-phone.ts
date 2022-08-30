import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { findPhoneThunk } from 'src/api/find-phone';
import { useList } from 'src/hooks';

function usePhone() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.phone);
  const { listPhones } = useList();

  const findPhone = useCallback(
    (id: string) => {
      dispatch(findPhoneThunk({ id, listPhones }));
    },
    [dispatch],
  );
  return {
    ...state,
    findPhone,
  };
}
export default usePhone;
