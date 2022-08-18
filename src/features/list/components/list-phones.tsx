import { useAppSelector } from 'src/store';
import {Navigate} from 'react-router-dom' 

function ListPhones(){
    const auth = useAppSelector(state => state.auth.isAuth);
    return auth?(
            <p>
                List numbers...
            </p>) :
            (<Navigate to="/login"/>
        )
        
    
}
export default ListPhones