import { Navigate, Outlet } from 'react-router';
import { useAuth } from 'src/hooks';
import ROUTES from './constants';

const PublicRoutes = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to={ROUTES.main} /> : <Outlet />;
};
export default PublicRoutes;
