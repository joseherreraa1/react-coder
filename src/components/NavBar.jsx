import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CarWidget from "./CartWidget";
import "./navBar.css";

export default function NavBar (){
    return(
        <Navbar className="navbar navbar-expand-lg navbar-light bg-dark navBar">
        <Container className="container-fluid d-flex">
            <Link to="/" className="titulo navbar-brand">
            Electro.Shop
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Link to="/" className="nav-link text-light fw-bold link">
                Inicio
                </Link>
                <Link to="/category/Celulares" className="nav-link text-light fw-bold link">
                Celulares
                </Link>
                <Link to="/category/Televisores" className="nav-link text-light fw-bold link">
                Televisores
                </Link>
                <Link to="/Contacto" className="nav-link text-light fw-bold link">
                Contacto
                </Link>
            </Nav>
            <div>
                <CarWidget />
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};
