import { Link } from "react-router-dom";
import ROUTES from "src/routes/constants";

function ListPhones() {
  return (
    <>
      <Link to={ROUTES.dynamic.id("3")}> Phone 3</Link>
      <Link to={ROUTES.add}> Add</Link>
      <Link to={ROUTES.dynamic.edit("4")}> Edit 3</Link>
    </>
  );
}
export default ListPhones;
