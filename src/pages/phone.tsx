import Phone from 'src/features/phone/components/phone';
import { Helmet } from 'react-helmet';
import usePhone from 'src/features/phone/hooks/usePhone';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CurrentPhone = () => {
  const { id } = useParams();
  const { phone, fetchPhone, isLoading, error } = usePhone();
  useEffect(() => {
    if (id) {
      fetchPhone(id);
    }
  }, [fetchPhone]);
  return !isLoading ? (
    <>
      <Helmet>
        {error ? (
          <title>{error}</title>
        ) : (
          <title>
            {phone.name.first} {phone.name.last}
          </title>
        )}
      </Helmet>
      <Phone />
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

export default CurrentPhone;
