import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" >Redux Book House</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Books</Nav.Link>
                    <Nav.Link as={Link} to="/addBook">Add Book</Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;