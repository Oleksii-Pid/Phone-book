import { useAppSelector, useAppDispatch } from 'src/store';
import { useCallback } from 'react';
import { fetchListPhonesThunk } from 'src/api/fetch-list-phones';
import { TPhone } from 'src/types';
import { setListPhones } from 'src/features/list-phones/redux/slice';
import addNewPhone, { DataNewPhone } from 'src/api/add-new-phone';
import editPhone from 'src/api/edit-phone';

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
  const saveNewPhone = useCallback(
    (dataNewPhone: DataNewPhone) => {
      saveChangedListPhones(addNewPhone({ dataNewPhone, listPhones: state.listPhones }));
    },
    [saveChangedListPhones],
  );

  const editSelectPhone = useCallback(
    (dataEditPhone: TPhone) => {
      saveChangedListPhones(editPhone({ dataEditPhone, listPhones: state.listPhones }));
    },
    [dispatch],
  );

  return {
    ...state,
    fetchPhones,
    saveChangedListPhones,
    saveNewPhone,
    editSelectPhone,
  };
}
export default useList;
