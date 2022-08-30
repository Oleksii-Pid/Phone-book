import { Container, Table } from 'react-bootstrap';
import ErrorPage from 'src/features/error';
import { usePhone } from 'src/hooks';

function SelectPhone() {
  const { phone, error } = usePhone();
  if (phone) {
    const backgroundColor = phone.isActive ? 'rgb(193, 236, 193)' : 'rgb(241, 200, 200)';

    return (
      <Container style={{ width: '50%', backgroundColor }}>
        <h1>
          {phone.name.first} {phone.name.last}{' '}
        </h1>
        <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          {phone.isActive ? 'Active' : 'Not Active'}
        </span>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{phone.name.first}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{phone.name.last}</td>
            </tr>
            {phone.age && (
              <tr>
                <td>Age</td>
                <td>{phone.age}</td>
              </tr>
            )}
            {phone.company && (
              <tr>
                <td>Company</td>
                <td>{phone.company}</td>
              </tr>
            )}
            <tr>
              <td>Phone</td>
              <td>{phone.phone}</td>
            </tr>
            {phone.email && (
              <tr>
                <td>Email</td>
                <td>{phone.email}</td>
              </tr>
            )}
            {phone.address && (
              <tr>
                <td>Address</td>
                <td>{phone.address}</td>
              </tr>
            )}
            <tr>
              <td>Registered</td>
              <td>{phone.registered}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  } else {
    return <ErrorPage nameError={error} />;
  }
}
export default SelectPhone;
