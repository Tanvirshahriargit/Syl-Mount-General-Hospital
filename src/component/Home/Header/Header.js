import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import Logo from "../../../logo.png"
import "./Header.css"

const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className="text-dark" sticky="top">
                <Container>
                    <img src={Logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/services">Services</NavLink>
                            <NavLink className="link" to="/specialist">Specialist</NavLink>
                            <NavLink className="link" to="/contact">Contact Us</NavLink> 
                            <NavLink className="link" to="/about">About</NavLink> 
                        </Nav>
                        <Nav>
                            {  user?.email?
                                <Button className="btn btn-light"  onClick={logOut}>LogOut</Button>:
                                <NavLink className="link m-4 ms-0" to="/login">Log In</NavLink>}
                        <NavLink className="link mt-4 " to="/register">Register</NavLink> 
                        <div className="d-flex mx-auto justify-content-center align-items-center">
                                {user?.email && <span>User Name: { user?.displayName}</span>}
                                <img className="rounded-circle h-50" src={ user?.photoURL}alt="" />
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;