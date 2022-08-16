import ListNumbers from "src/shared/ListNumbers";
import Layout from "src/shared/Layout";
import Number from "src/shared/Number";
import EditNumber from "src/shared/EditNumber";
import AddNumber from "src/shared/AddNumber";
import {Routes, Route} from "react-router-dom";
import * as Pages from 'src/pages';
import ROUTES from "./constants";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<ListNumbers/>}/>
        <Route path=":id" element={<Number/>}/>
        <Route path={ROUTES.dynamic.edit()} element={<EditNumber/>}/>
        <Route path={ROUTES.login} element={<Pages.SignIn/>}/>
        <Route path="add" element={<AddNumber/>}/>
        <Route path="*" element={<ListNumbers/>}/>
      </Route>
    </Routes>
  )
}