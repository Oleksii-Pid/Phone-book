import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchListPhonesThunk } from 'src/features/list-phones/redux/thunks';
import { TPhone } from 'src/types';
import { setListPhones } from 'src/features/list-phones/redux/slice';
import { addPhoneThunk, editPhoneThunk, deletePhoneThunk } from 'src/features/phone/redux/thunks';

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
  const addPhone = useCallback(
    (dataPhone: Omit<TPhone, 'id'>, callback: () => void) => {
      dispatch(addPhoneThunk({ dataPhone, callback }));
    },
    [dispatch],
  );

  const editPhone = useCallback(
    (dataPhone: TPhone, callback: () => void) => {
      dispatch(editPhoneThunk({ dataPhone, callback }));
    },
    [dispatch],
  );

  const deletePhone = useCallback(
    (id: string) => {
      dispatch(deletePhoneThunk({ id }));
    },
    [dispatch],
  );

  return {
    ...state,
    fetchPhones,
    saveChangedListPhones,
    addPhone,
    editPhone,
    deletePhone,
  };
}
export default useList;
