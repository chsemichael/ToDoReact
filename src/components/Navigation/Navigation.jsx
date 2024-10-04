import "./Navigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <Navbar expand="md" data-bs-theme="dark" bg="dark" className="fixed-top p-3">
      <Navbar.Brand href="/">ToDos</Navbar.Brand>
      {/* Hamburger button below */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="text-center">
          <Link to="/LogIn" className="nav-link">
            Log-In
          </Link>
          <Link to="/Todos" className="nav-link">
            To-Do List
          </Link>
          <Link to="/Categories" className="nav-link">
            Categories
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}