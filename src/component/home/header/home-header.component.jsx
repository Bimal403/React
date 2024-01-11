import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
const HomeHeader = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <Navbar
        bg={theme}
        data-bs-theme={theme}
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
              <Nav.Link href="#link">Shop</Nav.Link>

              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Clothing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Grocery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Enter your search key"
                ></input>
              </Form>
            </Nav>
            <Nav className=" justify-content-end">
              <Nav.Link href="#user">Cart(0)</Nav.Link>
              <Nav.Link href="#user">Sherlock Holmes</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
              <NavLink to="/signup" className={"nav-link"}>
                SignUp
              </NavLink>
              <NavLink to="/login" className={"nav-link"}>
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeHeader;
