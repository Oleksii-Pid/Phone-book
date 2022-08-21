import Phone from 'src/features/phone/components/phone';
import { Helmet } from 'react-helmet';

const CurrentPhone = () => {
  return (
    <>
      <Helmet>
        <title>Phone</title>
      </Helmet>
      <Phone />
    </>
  );
};

export default CurrentPhone;
