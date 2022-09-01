import { usePhone } from 'src/hooks';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import EditPhoneForm from 'src/features/phone/components/edit_phone_form';

function EditPhone() {
  const { id } = useParams();
  const { fetchPhone, isLoading } = usePhone();
  useEffect(() => {
    if (id) {
      fetchPhone(id);
    }
  }, [fetchPhone]);

  return !isLoading ? <EditPhoneForm /> : <h1>Loading...</h1>;
}
export default EditPhone;
