import Phone from 'src/features/phone/components/phone';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { TPhone } from 'src/api/upload-phones';
import { useList } from 'src/hooks';

const CurrentPhone = () => {
  const { listPhones } = useList();
  const { id } = useParams();
  const {
    name: { first, last },
  }: TPhone = listPhones.find((phone) => phone.id == id) as TPhone;

  return (
    <>
      <Helmet>
        <title>
          {first} {last}
        </title>
      </Helmet>
      <Phone />
    </>
  );
};

export default CurrentPhone;
