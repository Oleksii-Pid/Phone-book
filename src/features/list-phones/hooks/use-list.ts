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
  const onRemovePhone = (id: string) => {
    saveChangedListPhones(state.listPhones.filter((p) => p.id !== id));
  };

  return {
    ...state,
    fetchPhones,
    saveChangedListPhones,
    onRemovePhone,
  };
}
export default useList;
