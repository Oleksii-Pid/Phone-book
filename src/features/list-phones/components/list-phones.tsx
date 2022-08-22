import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import useList from 'src/features/list-phones/hooks/use-list';
import ROUTES from 'src/routes/constants';

function ListPhones() {
  const { listPhones } = useList();
  return (
    <ListGroup>
      {listPhones.map((phone) => (
        <ListGroup.Item key={phone.id}>
          <Link to={ROUTES.dynamic.id(`${phone.id}`)}>{phone.name.first}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ListPhones;
