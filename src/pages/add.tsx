import { Helmet } from 'react-helmet';
import { lazy } from 'react';
import { trackPromise } from 'react-promise-tracker';

const AddPhone = lazy(() => trackPromise(import('src/features/phone/components/add-phone')));

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
