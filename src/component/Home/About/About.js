import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <h2 className="text-center text-primary mt-3">About Us</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <br />
            {/* About top  Left img sections */}
            <div className="row container mb-4">
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="img-fuild container" src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY=" alt="" />
                </div>
                {/* About Right sections */}
                <div className="col-12 col-md-6 col-lg-6">
                    <h4>ABOUT OUR HOSPITAL</h4>
                    <p>For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine. This approach has given us an in-depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care for our patients. Each year, our 10,500 employees treat and care for around 320,000 patients at currently 26 locations in Germany and the United Kingdom.</p>
                    <h5><i className="fas fa-caret-right text-primary"></i> Browse Our Website</h5>
                    <h5><i className="fas fa-caret-right text-primary"></i> Best Service</h5>
                    <h5><i className="fas fa-caret-right text-primary"></i> Specialist Doctors </h5>
                    <Link to="/services"><button className="btn btn-primary mt-3">More Details</button></Link>
                </div>
            </div>
            <div className="row container mb-4">
                {/* About button left Sections*/}
                <div className="col-12 col-md-6 col-lg-6">
                    <h4 className="mb-4">WHY CHOOSE US?</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><i class="fas fa-blender-phone me-2 text-primary"></i>Excellent Services</Accordion.Header>
                            <Accordion.Body>
                                Clinical excellence must be the priority for any health care service provider. SylMount Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fas fa-user-md me-2 text-primary"></i>Qualified Doctors</Accordion.Header>
                            <Accordion.Body>
                                SylMount Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East. Even the nurses & technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><i class="fas fa-ambulance me-2 text-primary"></i>Emergency Support</Accordion.Header>
                            <Accordion.Body>
                                Emergency department: The department of a hospital responsible for the provision of medical and surgical care to patients arriving at the hospital in need of immediate care. Emergency department personnel may also respond to certain situations within the hospital such cardiac arrests.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><i class="fas fa-hospital-alt me-2 text-primary"></i>Infrastructure Hospital</Accordion.Header>
                            <Accordion.Body>
                                SylMount Hospital has 2 buildings on both sides of the chowhatta noyasorok Road, Sylhet Bangadesh. The hospital with more than 6 lac square feet of space is situated in the central region of Sylhet city, capital of Bangladesh.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {/* About button Right sections */}
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="img-fuild container mt-2" src="https://media.istockphoto.com/photos/modern-hospital-building-picture-id1312706504?k=20&m=1312706504&s=612x612&w=0&h=uWjrfV7m1WgrOi4Goq1LBc4pq5_OLG28PBTp6pC7Xf4=" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;