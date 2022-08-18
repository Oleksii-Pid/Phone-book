import Add from "src/features/add/components/add-phone";
import { Helmet } from "react-helmet";

const AddPhone = () => {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Add />
    </>
  );
};

export default AddPhone;
