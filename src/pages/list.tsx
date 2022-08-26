import ListPhones from 'src/features/list-phones';
import { Helmet } from 'react-helmet';
import { useList } from 'src/hooks';

const List = () => {
  const { isLoading, error } = useList();
  return !isLoading ? (
    <>
      <Helmet>{error ? <title>{error}</title> : <title>List</title>}</Helmet>
      <ListPhones />
    </>
  ) : (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>

      <h1>Loading...</h1>
    </>
  );
};

export default List;
