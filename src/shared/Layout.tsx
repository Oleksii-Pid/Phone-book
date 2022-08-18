import { Outlet } from 'react-router-dom';
import  { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { useAppSelector } from 'src/store';
import { useDispatch } from "react-redux";
import { setAuth } from 'src/features/auth/redux/slice';


export default function Layout(){
    const dispatch = useDispatch();
    const auth = useAppSelector(state => state.auth.isAuth);
    const onSingOut = () => {
        dispatch(setAuth(false));
    }
    return (
        <>  
            <Navbar  bg="primary" style = {{ paddingLeft:"1rem",paddingRight:"1rem", marginBottom:"10px", display:"flex", justifyContent: "space-between"}}>
                <NavbarBrand >
                    Phone books
                </NavbarBrand>
                {auth && (<Nav>
                    <Button onClick = {onSingOut} variant="primary">Sing out</Button>
                </Nav>)}
            </Navbar>
            <Outlet/>
        </>
    )
}