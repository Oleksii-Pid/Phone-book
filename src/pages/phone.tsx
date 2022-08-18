import SelectPhone from "src/features/phone/components/select-phone";
import { Helmet } from "react-helmet";

const Phone = () => {
  return (
    <>
      <Helmet>
        <title>Phone</title>
      </Helmet>
      <SelectPhone />
    </>
  );
};

export default Phone;
