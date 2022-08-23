import AddPhone from 'src/features/add-phone/components/add-phone';
import { Helmet } from 'react-helmet';

const Add = () => {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddPhone />
    </>
  );
};

export default Add;
