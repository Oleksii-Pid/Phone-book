import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useList } from 'src/hooks';
import ROUTES from 'src/routes/constants';

function GroupsPhones() {
  const { listPhones } = useList();
  const nameGroups: string[] = [];

  listPhones.map((phone) => {
    if (!nameGroups.includes(phone.name.first[0])) {
      nameGroups.push(phone.name.first[0]);
    }
  });

  const groupPhones = nameGroups.map((group) => (
    <ListGroup.Item key={group}>
      {group}
      <ListGroup>
        {listPhones.map((phone) => {
          return (
            group == phone.name.first[0] && (
              <ListGroup.Item key={phone.id}>
                <Link to={ROUTES.dynamic.id(`${phone.id}`)}>{phone.name.first}</Link>
              </ListGroup.Item>
            )
          );
        })}
      </ListGroup>
    </ListGroup.Item>
  ));
  return <>{groupPhones}</>;
}
export default GroupsPhones;
