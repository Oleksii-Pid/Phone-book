import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function EditPhone() {
  const { id } = useParams();
  console.log('hello');
  return (
    <>
      <p>Edit number {id}</p>
    </>
  );
}
export default EditPhone;
