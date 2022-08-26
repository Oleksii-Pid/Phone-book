import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useList } from 'src/hooks';
import ROUTES from 'src/routes/constants';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button, ButtonGroup } from 'react-bootstrap';
import { TPhone } from 'src/types';

function GroupsPhones() {
  const { listPhones, saveChangedListPhones } = useList();
  const nameGroups: string[] = [];

  const onDeletePhone = (id: string) => {
    const changeListPhones = listPhones.filter((p) => p.id !== id);
    saveChangedListPhones(changeListPhones);
  };

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
                      onDeletePhone(phone.id);
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
