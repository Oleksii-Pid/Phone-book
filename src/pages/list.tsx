import { Helmet } from 'react-helmet';
import { useList } from 'src/hooks';
import { lazy } from 'react';
import { trackPromise } from 'react-promise-tracker';
const ListPhones = lazy(() => trackPromise(import('src/features/list-phones')));

const List = () => {
  const { isLoading, error } = useList();
  return (
    <>
      <Helmet>
        {!isLoading ? (
          error ? (
            <title>{error}</title>
          ) : (
            <title>List</title>
          )
        ) : (
          <title>Loading...</title>
        )}
      </Helmet>
      <ListPhones />
    </>
  );
};

export default List;
