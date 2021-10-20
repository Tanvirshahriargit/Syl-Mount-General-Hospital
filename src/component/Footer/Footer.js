import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.png"
const Footer = () => {
    return (
        <div className="bg-light">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* logo and about sections */}
                        <img src={logo} alt="" />
                        <p>Sy Mount General Hospital For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine.</p>

                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer Pages sections */}
                        <h4 className="text-primary mt-2">Pages</h4>
                        <p><NavLink className="link text-dark" to="/home">Home</NavLink></p>
                        <p><NavLink className="link text-dark" to="/services">Services</NavLink></p>
                        <p><NavLink className="link text-dark" to="/specialist">Specialist</NavLink></p>
                        <p><NavLink className="link text-dark" to="/contact">Contact Us</NavLink></p>
                        <p><NavLink className="link text-dark" to="/about">About</NavLink></p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer location section*/}
                        <div>
                            <h4 className="text-primary text-start mt-2">Location</h4>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-location-arrow"></i></p></div>
                                <div className="ms-3">
                                    <h6>
                                        House 224, Nayasorok
                                        <br />
                                        syl 3100,Bangladesh </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fas fa-phone-alt"></i></p></div>
                                <div className="ms-3">
                                    <h6> +1245789134 </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-envelope" aria-hidden="true"></i></p></div>
                                <div className="ms-3">
                                    <h6> contact@sylmountgeneral.com </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="text-primary" />
                {/* footer button */}
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        {/* footer copywrites section */}
                        <p variant="white" className="pt-4">© 2021 sylmountgeneral. All Rights Reserved.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* Icons sections */}
                        <p className='text-dark fs-4 m-3'><i className="fab fa-instagram"></i><i className="fab fa-facebook ms-2"></i><i className="fab fa-youtube ms-2"></i><i className="fab fa-linkedin ms-2"></i></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;