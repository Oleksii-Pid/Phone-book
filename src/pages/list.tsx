import List from 'src/features/list-phones/components/list-phones';
import { Helmet } from 'react-helmet';

const ListPhones = () => {
  return (
    <>
      <Helmet>
        <title>List</title>
      </Helmet>
      <List />
    </>
  );
};

export default ListPhones;
