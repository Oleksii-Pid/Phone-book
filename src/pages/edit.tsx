import { Helmet } from 'react-helmet';
import { usePhone } from 'src/hooks';
import { lazy } from 'react';
import { trackPromise } from 'react-promise-tracker';

const EditPhone = lazy(() => trackPromise(import('src/features/phone/components/edit_phone')));

const Edit = () => {
  const { phone, isLoading, error } = usePhone();

  return (
    <>
      <Helmet>
        {!isLoading ? (
          !phone ? (
            <title>{error}</title>
          ) : (
            <title>Edit</title>
          )
        ) : (
          <title>Loading...</title>
        )}
      </Helmet>
      <EditPhone />
    </>
  );
};

export default Edit;
