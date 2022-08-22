import { useAppSelector, useAppDispatch } from "src/store";
import { useCallback } from "react";
import {uploadPhonesThunk} from 'src/api/upload-phones';

function useList (){
const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.list);

  const uploadPhones = useCallback(() => {
    dispatch(uploadPhonesThunk());
  }, [dispatch]);

  
  return {
    ...state,
    uploadPhones,
  };
}
export default useList