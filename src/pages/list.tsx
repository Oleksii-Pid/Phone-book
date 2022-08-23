import ListPhones from 'src/features/list-phones';
import { Helmet } from 'react-helmet';

const List = () => {
  return (
    <>
      <Helmet>
        <title>List</title>
      </Helmet>
      <ListPhones />
    </>
  );
};

export default List;
