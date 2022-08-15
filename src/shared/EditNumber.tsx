import { useParams } from "react-router-dom";


function EditNumber(){
    const { id } = useParams()
    return(
        <p>
            Edit number {id}
        </p>
    )
}
export default EditNumber