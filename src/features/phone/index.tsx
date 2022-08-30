import { useParams } from 'react-router';
import SelectPhone from 'src/features/phone/components/select-phone';
import usePhone from './hooks/use-phone';
import { useEffect } from 'react';

function Phone() {
  const { id } = useParams();
  const { findPhone, isLoading } = usePhone();
  useEffect(() => {
    if (id) {
      findPhone(id);
    }
  }, [findPhone]);
  return !isLoading ? <SelectPhone /> : <h1>Loading...</h1>;
}
export default Phone;
