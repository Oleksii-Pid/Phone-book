import { useParams } from 'react-router';
import SelectEditPhone from './components/select-edit-phone';
import { usePhone } from 'src/hooks';
import { useEffect } from 'react';

function EditPhone() {
  const { id } = useParams();
  const { fetchPhone, isLoading } = usePhone();
  useEffect(() => {
    if (id) {
      fetchPhone(id);
    }
  }, [fetchPhone]);
  return !isLoading ? <SelectEditPhone /> : <h1>Loading...</h1>;
}
export default EditPhone;
