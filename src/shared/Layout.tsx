import { Outlet } from "react-router-dom";
import { Navbar, Nav, Button, NavbarBrand } from "react-bootstrap";
import useAuth from "src/features/auth/hooks/use-auth";

function Layout() {
  const { isAuth, onSingOut } = useAuth();

  return (
    <>
      <Navbar
        bg="primary"
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavbarBrand>Phone books</NavbarBrand>
        {isAuth && (
          <Nav>
            <Button onClick={onSingOut} variant="primary">
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
