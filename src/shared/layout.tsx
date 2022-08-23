import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Button, NavbarBrand, Stack } from 'react-bootstrap';
import { useAuth } from 'src/hooks';
import { useEffect } from 'react';
import  useList  from 'src/features/list-phones/hooks/use-list';

function Layout() {
  const { isAuth, onLogout, onTokenLogin } = useAuth();
  const { uploadPhones} = useList()

  useEffect(() => {
    const email = localStorage.getItem('token');
    if (email) {
      onTokenLogin(email);
    }
    uploadPhones()
  }, [onTokenLogin]);

  const onClickOut = () => onLogout();
  return (
    <>
    <Navbar
        bg='primary'
        style={{
          paddingLeft: '1rem',
          paddingRight: '1rem',
          width:'100%',
          height:'3rem',
          display: 'flex',
          justifyContent: 'space-between',
          position:'fixed',
          zIndex:'9'
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
      <Stack style={{
        paddingTop:'3rem'
      }}>
        <Outlet />
    </Stack></>
      
  );
}
export default Layout;
