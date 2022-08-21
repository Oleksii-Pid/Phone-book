import { useParams } from 'react-router-dom';

function EditPhone() {
  const { id } = useParams();
  return (
    <>
      <p>Edit number {id}</p>
    </>
  );
}
export default EditPhone;
