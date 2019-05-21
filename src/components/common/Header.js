import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <NavLink className="navbar-brand" to="/" exact>
        Wódzitsu
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/" exact>
              Strona Główna
            </NavLink>
            <NavLink className="nav-link" to="/reservation">
              Rezerwacje
            </NavLink>
            <NavDropdown title="Imprezy" id="basic-nav-dropdown">
              <NavLink to="/tours2019" className="dropdown-item">
                Wakacje 2019
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/bachelor-party" className="dropdown-item">
                Kawalerski
              </NavLink>
              <NavLink to="/filip-wedding" className="dropdown-item">
                Ślub Filipa
              </NavLink>
            </NavDropdown>
          </Nav>
        </Container>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
