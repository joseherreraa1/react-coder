import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CarWidget from "./CartWidget";
import "./navBar.css";

function NavBar() {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="titulo">
          Electro.Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Celulares</Nav.Link>
            <Nav.Link href="#link">TV</Nav.Link>
            <Nav.Link href="#link">Notebooks</Nav.Link>
          </Nav>
          <div>
            <CarWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
