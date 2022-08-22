import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { useAuth } from 'src/hooks';
import { useEffect } from 'react';

function Layout() {
  const { isAuth, onLogout, onTokenLogin } = useAuth();

  useEffect(() => {
    const email = localStorage.getItem('token');
    if (email) {
      onTokenLogin(email);
    }
  }, [onTokenLogin]);

  const onClickOut = () => onLogout();
  return (
    <>
      <Navbar
        bg='primary'
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NavbarBrand>Phone books </NavbarBrand>
        {isAuth && (
          <Nav>
            <Button onClick={onClickOut} variant='primary'>
              Sing out
            </Button>
          </Nav>
        )}
      </Navbar>
      <Outlet />
    </>
  );
}
export default Layout;
