import { IoMdAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ROUTES from 'src/routes/constants';

function AddPhoneLink() {
  return (
    <Link style={{ margin: 'auto', opacity: '0.5' }} to={ROUTES.add}>
      <IoMdAddCircleOutline size='5rem' />
    </Link>
  );
}
export default AddPhoneLink;
