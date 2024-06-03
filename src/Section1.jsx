import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './App.css'

function Section1({ cartItemCount }) {
    const navigate = useNavigate();

    const handleCartClick = () => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (isAuthenticated) {
            navigate('/login');
        } else {
            localStorage.setItem('redirectPath', '/cart');
            alert("Please login to continue.");
            navigate('/login');
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3 navibar" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="Logo"></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse id="offcanvasNavbar">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/About'>About</Nav.Link>
                        <Nav.Link as={Link} to='/Services'>Service</Nav.Link>
                        <Nav.Link as={Link} to='/product'>Product</Nav.Link>
                        <Nav.Link onClick={handleCartClick}>
                            Cart ({cartItemCount})
                        </Nav.Link>
                        <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Section1;
