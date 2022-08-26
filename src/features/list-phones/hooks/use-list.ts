import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchListPhonesThunk } from 'src/api/fetch-list-phones';
import { TPhone } from 'src/types';
import { setListPhones } from 'src/features/list-phones/redux/slice';

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

  return {
    ...state,
    fetchPhones,
    saveChangedListPhones,
  };
}
export default useList;
