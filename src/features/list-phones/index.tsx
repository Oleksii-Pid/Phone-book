import ListGroup from 'react-bootstrap/ListGroup';
import GroupsPhones from './components/groups-phones';
import useList from './hooks/use-list';
function ListPhones() {
  const { error } = useList();
  return error ? (
    <h1 style={{ color: 'red' }}>{error}</h1>
  ) : (
    <ListGroup>
      <GroupsPhones />
    </ListGroup>
  );
}

export default ListPhones;
