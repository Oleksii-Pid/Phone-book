import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function  SelectPhone(){
    const {id} = useParams()
    return(
        <>
            <Helmet>
                <title>Phone</title>
            </Helmet>

            <p>
                Phone {id}
            </p>
        </>
    )
        
}
export default SelectPhone