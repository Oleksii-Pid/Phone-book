import ListGroup from 'react-bootstrap/ListGroup';
import GroupsPhones from './components/groups-phones';
import ErrorPage from '../error';
import useList from './hooks/use-list';
import AddPhoneLink from './components/add-phone-link';

function ListPhones() {
  const { error } = useList();
  return !error ? (
    <>
      <AddPhoneLink />
      <ListGroup>
        <GroupsPhones />
      </ListGroup>
    </>
  ) : (
    <ErrorPage nameError={error} />
  );
}

export default ListPhones;
