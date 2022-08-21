import { useParams } from 'react-router-dom';

function Phone() {
  const { id } = useParams();
  return (
    <>
      <p>Phone {id}</p>
    </>
  );
}
export default Phone;
