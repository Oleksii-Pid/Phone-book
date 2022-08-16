import { Outlet } from 'react-router-dom';
import  Navbar    from 'react-bootstrap/Navbar'

export default function Layout(){
    return (
        <>  
            <Navbar bg="primary">
                <h1>Phone books</h1>
            </Navbar>
            <Outlet/>
        </>
    )
}