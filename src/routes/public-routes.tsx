import { Navigate, Outlet } from 'react-router';
import { useAuth } from 'src/hooks';
import ROUTES from './constants';

const PublicRoutes = () => {
  const { isAuth, isAuthReady } = useAuth();
  return isAuthReady ? !isAuth ? <Outlet /> : <Navigate to={ROUTES.main} /> : <h1>Loading...</h1>;
};
export default PublicRoutes;
