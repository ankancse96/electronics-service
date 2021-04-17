import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import { Nav,Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" color="white" variant="dark" expand="lg">
            <LinkContainer to="/home">
            <Navbar.Brand>Electronics Solution</Navbar.Brand>
      </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/home">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/orders">
      <Nav.Link>Orders</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/dashboard">
      <Nav.Link>Dashboard</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/deal">
      <Nav.Link>Deal</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link>Login </Nav.Link>
      </LinkContainer>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;