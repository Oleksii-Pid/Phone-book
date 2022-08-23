import { useParams } from 'react-router-dom';
import { TPhone } from 'src/api/upload-phones';
import useList from 'src/features/list-phones/hooks/use-list';
import { Container, Table } from 'react-bootstrap';

function Phone() {
  const { listPhones } = useList();
  const { id } = useParams();
  const {
    isActive,
    age,
    name: { first, last },
    company,
    email,
    phone,
    address,
    registered,
  }: TPhone = listPhones.find((phone) => phone.id == id) as TPhone;

  const backgroundColor = isActive ? 'rgb(193, 236, 193)' : 'rgb(241, 200, 200)';

  return (
    <Container style={{ width: '50%', backgroundColor }}>
      <h1>
        {first} {last}{' '}
      </h1>
      <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
        {isActive ? 'Active' : 'Not Active'}
      </span>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{first}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{last}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{company}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>Registered</td>
            <td>{registered}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default Phone;
