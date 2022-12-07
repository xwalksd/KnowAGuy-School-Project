import React from "react";
import Container from 'react-bootstrap/Container';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

export function NavigationMenu(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">KnowAGuy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             
              <Nav.Link><NavLink to="home">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to="search">Search</NavLink></Nav.Link>
             
              <Nav.Link> <NavLink to="addguy">Add A New Guy</NavLink></Nav.Link>
          
            
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

       