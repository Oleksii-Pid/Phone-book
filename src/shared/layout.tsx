import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand, Stack } from 'react-bootstrap';
import { useAuth, useList } from 'src/hooks';
import { useEffect } from 'react';
import ROUTES from 'src/routes/constants';

function Layout() {
  const { isAuth, onLogout, onTokenLogin } = useAuth();
  const { fetchPhones } = useList();

  useEffect(() => {
    const email = localStorage.getItem('token');
    if (email) {
      onTokenLogin(email);
    }
    fetchPhones();
  }, [onTokenLogin, fetchPhones]);

  const onClickOut = () => onLogout();
  return (
    <>
      <Navbar
        bg='dark'
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          width: '100%',
          height: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          zIndex: '9',
        }}
      >
        <NavbarBrand>
          <Link to={ROUTES.main}>Phone books</Link>{' '}
        </NavbarBrand>
        {isAuth && (
          <Nav>
            <Button onClick={onClickOut} variant='primary'>
              Sing out
            </Button>
          </Nav>
        )}
      </Navbar>
      <Stack
        style={{
          paddingTop: '4rem',
        }}
      >
        <Outlet />
      </Stack>
    </>
  );
}
export default Layout;
