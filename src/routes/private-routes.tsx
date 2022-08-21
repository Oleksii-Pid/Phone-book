import { Navigate, Outlet } from 'react-router';
import { useAuth } from 'src/hooks';
import ROUTES from './constants';

const PrivateRoutes = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoutes;
