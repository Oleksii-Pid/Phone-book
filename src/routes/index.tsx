import Layout from 'src/shared/layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from 'src/pages';
import ROUTES from './constants';
import PrivateRoutes from './private-routes';
import PublicRoutes from './public-routes';
import { Suspense } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader promiseTracker={usePromiseTracker} />}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Pages.List />} />
            <Route path={ROUTES.dynamic.id()} element={<Pages.CurrentPhone />} />
            <Route path={ROUTES.dynamic.edit()} element={<Pages.Edit />} />
            <Route path={ROUTES.add} element={<Pages.Add />} />
            <Route path={ROUTES.another} element={<Pages.List />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path={ROUTES.login} element={<Pages.SignInPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
