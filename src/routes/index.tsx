import Layout from 'src/shared/layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from 'src/pages';
import ROUTES from './constants';
import PrivateRoutes from './private-routes';
import PublicRoutes from './public-routes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Pages.ListPhones />} />
          <Route path={ROUTES.dynamic.id()} element={<Pages.CurrentPhone />} />
          <Route path={ROUTES.dynamic.edit()} element={<Pages.EditPhone />} />
          <Route path={ROUTES.add} element={<Pages.AddPhone />} />
          <Route path={ROUTES.another} element={<Pages.ListPhones />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path={ROUTES.login} element={<Pages.SignInPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
