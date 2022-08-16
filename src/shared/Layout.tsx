import { Outlet } from 'react-router-dom';
import  { Navbar, Nav, Button } from 'react-bootstrap';

export default function Layout(){
    return (
        <>  
            <Navbar  bg="primary">
                <h1>Phone books</h1>
                <Nav >
                    <Button variant="primery" className = "mr-2">Log in</Button>
                    <Button variant="primery">Sing out</Button>
                </Nav>
            </Navbar>
            <Outlet/>
        </>
    )
}