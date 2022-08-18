import { useLocation, Outlet, Navigate } from "react-router";
import { useAppSelector } from 'src/features/hook/redux/redux';

const PrivateRoutes = () => {
    const auth = useAppSelector(state => state.auth.isAuth);
    const location = useLocation()
    return(
        auth ? <Outlet/> : <Navigate to = "/login" state = {{from:location}}/>
    )
}

export default PrivateRoutes