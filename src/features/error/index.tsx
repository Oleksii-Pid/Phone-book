import { Alert } from 'react-bootstrap';
import ROUTES from 'src/routes/constants';

type TError = {
  nameError: string | undefined | null;
};

function ErrorPage(prop: TError) {
  return (
    <Alert
      variant='danger'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Alert.Heading>{prop.nameError}</Alert.Heading>
      {(prop.nameError == 'Phone is not found!' || prop.nameError == 'Page is not found!') && (
        <Alert.Link href={ROUTES.main}>Go to main page</Alert.Link>
      )}
    </Alert>
  );
}
export default ErrorPage;
