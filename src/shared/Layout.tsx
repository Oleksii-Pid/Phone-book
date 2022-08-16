import { Outlet } from 'react-router-dom';
import  { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';

export default function Layout(){
    return (
        <>  
            <Navbar  bg="primary" style = {{ paddingLeft:"1rem",paddingRight:"1rem", marginBottom:"10px", display:"flex", justifyContent: "space-between"}}>
                <NavbarBrand >
                    Phone books
                </NavbarBrand>
                <Nav>
                    <Button variant="primery">Log in</Button>
                    <Button variant="primery">Sing out</Button>
                </Nav>
            </Navbar>
            <Outlet/>
        </>
    )
}