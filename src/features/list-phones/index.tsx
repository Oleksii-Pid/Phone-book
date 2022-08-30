import GroupsPhones from './components/groups-phones';
import ErrorPage from '../error';
import useList from './hooks/use-list';
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
