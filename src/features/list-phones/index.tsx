import ListGroup from 'react-bootstrap/ListGroup';
import GroupsPhones from './components/groups-phones';
import ErrorPage from '../error';
import { IoMdAddCircleOutline } from 'react-icons/io';
import useList from './hooks/use-list';
import { Link } from 'react-router-dom';
import ROUTES from 'src/routes/constants';

function ListPhones() {
  const { error } = useList();
  return !error ? (
    <>
      <Link style={{ margin: 'auto', opacity: '0.5' }} to={ROUTES.add}>
        <IoMdAddCircleOutline size='5rem' />
      </Link>
      <ListGroup>
        <GroupsPhones />
      </ListGroup>
    </>
  ) : (
    <ErrorPage nameError={error} />
  );
}

export default ListPhones;
