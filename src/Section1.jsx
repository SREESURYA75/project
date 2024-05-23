import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css'

function Section1({ cartItemCount }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3 navibar" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="Logo"></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse id="offcanvasNavbar">
                    <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/About'>About</Nav.Link>
                        <Nav.Link as={Link} to='/Services'>Service</Nav.Link>
                        
                        <Nav.Link as={Link} to='/product'>
                            Product
                        </Nav.Link>
                    
                    
                        <Nav.Link as={Link} to= "/cart">
                            Cart ({cartItemCount})
                        </Nav.Link>
                        <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to={'./Login'}>Login</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Section1;
