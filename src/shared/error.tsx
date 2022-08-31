import { Alert } from 'react-bootstrap';
import ROUTES from 'src/routes/constants';

type TError = {
  nameError: string | undefined | null;
};
enum ERROR_MESSAGE {
  notDelete = 'Phone is not deleted!',
  notEdit = 'The phone has not been changed!',
  notAdd = 'No phone added!',
  pageNotFound = 'Page is not found!',
  phoneNotFound = 'Phone is not found!',
}

function ErrorPage(prop: TError) {
  return (
    <Alert
      variant='danger'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Alert.Heading>{prop.nameError}</Alert.Heading>
      {prop.nameError == ERROR_MESSAGE.notDelete ||
        ((ERROR_MESSAGE.notAdd ||
          ERROR_MESSAGE.notEdit ||
          ERROR_MESSAGE.pageNotFound ||
          ERROR_MESSAGE.phoneNotFound) && (
          <Alert.Link href={ROUTES.main}>Go to main page</Alert.Link>
        ))}
    </Alert>
  );
}
export default ErrorPage;
