import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function EditPhone() {
  const { id } = useParams();
  return (
    <>
      <p>Edit number {id}</p>
    </>
  );
}
export default EditPhone;
