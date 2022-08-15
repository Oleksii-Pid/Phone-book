import { useParams } from "react-router-dom"

function  Number(){
    const {id} = useParams()
    return(
        <p>
            Number {id}
        </p>
    )
}
export default Number