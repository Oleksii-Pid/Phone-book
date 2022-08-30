import ListPhones from 'src/features/list-phones';
import { Helmet } from 'react-helmet';
import { useList } from 'src/hooks';

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
