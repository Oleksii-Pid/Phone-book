import GroupsPhones from './components/groups-phones';
import ErrorPage from '../../shared/error';
import { useList } from 'src/hooks';
import AddPhoneLink from './components/add-phone-link';

function ListPhones() {
  const { error, isLoading } = useList();
  return !isLoading ? (
    !error ? (
      <>
        <AddPhoneLink />
        <GroupsPhones />
      </>
    ) : (
      <ErrorPage nameError={error} />
    )
  ) : (
    <h1>Loading...</h1>
  );
}

export default ListPhones;
