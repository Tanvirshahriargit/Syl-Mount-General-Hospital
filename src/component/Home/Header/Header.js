import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../../../logo.png"
import "./Header.css"

const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className="text-dark" sticky="top">
                <Container>
                    <img src={Logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/services">Services</Nav.Link>
                            <Nav.Link to="/specialist">Specialist</Nav.Link>
                            <Nav.Link to="/corporate">Corporate</Nav.Link>
                            <Nav.Link to="/contact">Contact Us</Nav.Link> 
                            <Nav.Link to="/about">About</Nav.Link> 
                        </Nav>
                        <Nav>
                            <button className="btn btn-primary mx-2 "> Log In</button>
                            <button className="btn btn-primary mx-2 "> Register</button>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default navbar;