import GroupsPhones from './components/groups-phones';
import ErrorPage from '../../shared/error';
import { useList, usePhone } from 'src/hooks';
import AddPhoneLink from './components/add-phone-link';
import { useEffect } from 'react';

function ListPhones() {
  const { error, isLoading } = useList();
  const { clearStatePhone } = usePhone();
  useEffect(() => {
    clearStatePhone();
  }, []);
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
