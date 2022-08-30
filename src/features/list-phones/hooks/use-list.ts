import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchListPhonesThunk } from 'src/api/fetch-list-phones';
import { TPhone } from 'src/types';
import { setListPhones, pushPhone } from 'src/features/list-phones/redux/slice';
import createNewPhone, { DataNewPhone } from 'src/api/craete-new-phone';

function useList() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.list);

  const fetchPhones = useCallback(() => {
    dispatch(fetchListPhonesThunk());
  }, [dispatch]);

  const saveChangedListPhones = useCallback(
    (list: TPhone[]) => {
      dispatch(setListPhones(list));
    },
    [dispatch],
  );
  const saveNewPhone = useCallback((data: DataNewPhone) => {
    dispatch(pushPhone(createNewPhone(data)));
  }, []);

  return {
    ...state,
    fetchPhones,
    saveChangedListPhones,
    saveNewPhone,
  };
}
export default useList;
