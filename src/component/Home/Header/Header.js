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
                        <Nav className="d-flex mx-auto justify-content-end align-items-center">
                            {user?.email && <span className="m-4 ms-0"><i class="fas fa-user-shield text-primary"></i> User Name: {user?.displayName}
                            </span>}
                            {user?.email && <img height="50px" width="50px" className="rounded-circle mt-3 me-2" src={user?.photoURL} alt="" />}
                            {user?.email ?
                                <Button className="btn rounded-pill m-3 ms-0" onClick={logOut}>Logout <i class="fas fa-sign-out-alt"></i></Button> :
                                <NavLink className="link m-3 ms-0" to="/login">Log In</NavLink>}
                            {!user?.email &&
                            <NavLink className="link " to="/register">Register</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;