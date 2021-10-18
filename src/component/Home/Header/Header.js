import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/services">Services</NavLink>
                            <NavLink className="link" to="/specialist">Specialist</NavLink>
                            <NavLink className="link" to="/corporate">Corporate</NavLink>
                            <NavLink className="link" to="/contact">Contact Us</NavLink> 
                            <NavLink className="link" to="/about">About</NavLink> 
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