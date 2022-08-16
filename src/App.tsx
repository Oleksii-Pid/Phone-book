import ListNumbers from "./shared/ListNumbers";
import FormSingIn from "./shared/FormSingIn";
import Layout from "./shared/Layout";
import Number from "./shared/Number";
import EditNumber from "./shared/EditNumber";
import AddNumber from "./shared/AddNumber";
import { Routes, Route } from "react-router-dom";


export default function App(){
    
    return(
        <>
            <Routes>
                <Route path = "/" element = {<Layout/>}>
                    <Route index element = {<ListNumbers/>}/>
                    <Route path = ":id" element = {<Number/>}/>
                    <Route path = "edit/:id" element = {<EditNumber/>}/>
                    <Route path = "login" element = {<FormSingIn/>}/>
                    <Route path = "add" element = {<AddNumber/>}/>
                    <Route path = "*" element = {<ListNumbers/>}/>
                </Route>
            </Routes>
        </>
    )
}