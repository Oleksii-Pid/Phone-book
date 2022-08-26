import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useList } from 'src/hooks';
import ROUTES from 'src/routes/constants';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button, ButtonGroup } from 'react-bootstrap';
import { TPhone } from 'src/types';

function GroupsPhones() {
  const { listPhones, onRemovePhone } = useList();
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
        {listPhones.map((phone: TPhone) => {
          return (
            group == phone.name.first[0] && (
              <ListGroup.Item
                key={phone.id}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Link to={ROUTES.dynamic.id(`${phone.id}`)}>{phone.name.first}</Link>
                <ButtonGroup>
                  <Button variant='link' className='mr-10'>
                    <Link to={ROUTES.dynamic.edit(`${phone.id}`)}>
                      {' '}
                      <AiOutlineEdit />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => {
                      onRemovePhone(phone.id);
                    }}
                    variant='danger'
                  >
                    <BsFillTrashFill />
                  </Button>
                </ButtonGroup>
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
