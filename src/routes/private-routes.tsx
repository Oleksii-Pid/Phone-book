import { Navigate, Outlet } from 'react-router';
import { useAuth } from 'src/hooks';
import ROUTES from './constants';

const PrivateRoutes = () => {
  const { isAuth, isAuthReady } = useAuth();
  return isAuthReady ? isAuth ? <Outlet /> : <Navigate to={ROUTES.login} /> : <h1>Loading...</h1>;
};

export default PrivateRoutes;
