import Layout from "src/shared/Layout";
import { Routes, Route } from "react-router-dom";
import * as Pages from 'src/pages';
import ROUTES from "./constants";
import PrivateRoutes from "src/shared/hoc/PrivateRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route element={<PrivateRoutes/>}>
          <Route index element={<Pages.List/>}/>
          <Route path={ROUTES.dynamic.id()} element={<Pages.Phone/>}/>
          <Route path={ROUTES.dynamic.edit()} element={<Pages.Edit/>}/>
          <Route path={ROUTES.add} element={<Pages.Add/>}/>
          <Route path={ROUTES.another} element={<Pages.List/>}/>
        </Route>
        <Route path={ROUTES.login} element={<Pages.SignIn/>}/>
      </Route>
    </Routes>
  )
}