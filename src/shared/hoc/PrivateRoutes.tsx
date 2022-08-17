import { Outlet, Navigate } from "react-router";

const PrivateRoutes = () => {
    let auth = true;
    return(
        auth ? <Outlet/> : <Navigate to = "/login"/>
    )
}

export default PrivateRoutes