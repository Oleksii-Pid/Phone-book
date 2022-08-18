import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function SelectPhone() {
  const { id } = useParams();
  return (
    <>
      <p>Phone {id}</p>
    </>
  );
}
export default SelectPhone;
