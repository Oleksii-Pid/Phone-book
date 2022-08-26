import { Container } from 'react-bootstrap';

type TError = {
  nameError: string;
};

function ErrorPage(prop: TError) {
  return (
    <Container>
      <h1 style={{ color: 'red' }}>{prop.nameError}</h1>
    </Container>
  );
}
export default ErrorPage;
