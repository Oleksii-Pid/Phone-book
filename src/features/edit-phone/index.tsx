import { useParams } from 'react-router';
import SelectEditPhone from './components/select-edit-phone';
import usePhone from '../phone/hooks/use-phone';
import { useEffect } from 'react';

function EditPhone() {
  const { id } = useParams();
  const { findPhone, isLoading } = usePhone();
  useEffect(() => {
    if (id) {
      findPhone(id);
    }
  }, [findPhone]);
  return !isLoading ? <SelectEditPhone /> : <h1>Loading...</h1>;
}
export default EditPhone;
