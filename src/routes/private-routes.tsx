import { Outlet, Navigate } from 'react-router';
import useAuth from 'src/features/auth/hooks/use-auth';
import ROUTES from './constants';

const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.login} replace />;
};

export default PrivateRoutes;
