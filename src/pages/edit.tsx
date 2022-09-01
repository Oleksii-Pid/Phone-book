import EditPhone from 'src/features/phone/components/edit_phone';
import { Helmet } from 'react-helmet';
import { usePhone } from 'src/hooks';

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
