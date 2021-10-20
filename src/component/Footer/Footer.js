import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.png"
const Footer = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <Navbar bg="light" variant="" className="mt-3">
                </Navbar>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        {/* left logo sections */}
                            <img src={logo} alt="" />
                       
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* Icons sections */}
                        <p className='text-dark fs-4 m-3'><i className="fab fa-instagram"></i><i className="fab fa-facebook ms-2"></i><i className="fab fa-youtube ms-2"></i><i className="fab fa-linkedin ms-2"></i></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                         {/* footer copywrites section */}
                <p variant="white" className=" p-2">© 2021 sylmountgeneral. All Rights Reserved.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <Nav>
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/services">Services</NavLink>
                            <NavLink className="link" to="/specialist">Specialist</NavLink>
                            <NavLink className="link" to="/contact">Contact Us</NavLink> 
                            <NavLink className="link" to="/about">About</NavLink> 
                        </Nav>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;