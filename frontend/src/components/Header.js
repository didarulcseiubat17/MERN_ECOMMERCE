import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/home">
          <Navbar.Brand >MERN ECOMMERCE</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
              <Nav.Link >
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              </LinkContainer>
             <LinkContainer to="/login">
             <Nav.Link >
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
             </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
