import { Helmet } from 'react-helmet';
import usePhone from 'src/features/phone/hooks/use-phone';
import { lazy } from 'react';
import { trackPromise } from 'react-promise-tracker';

const Phone = lazy(() => trackPromise(import('src/features/phone')));

const CurrentPhone = () => {
  const { phone, isLoading, error } = usePhone();

  return (
    <>
      <Helmet>
        {!isLoading ? (
          !phone ? (
            <title>{error}</title>
          ) : (
            <title>
              {phone.name.first} {phone.name.last}
            </title>
          )
        ) : (
          <title>Loading...</title>
        )}
      </Helmet>
      <Phone />
    </>
  );
};

export default CurrentPhone;
