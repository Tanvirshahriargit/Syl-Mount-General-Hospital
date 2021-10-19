import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <h2 className="text-center text-primary mt-3">About Us</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <br />
            <div className="row container mb-4">
                <div className="col-12 col-md-6">
                    <img className="img-fuild container" src="https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY=" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h1>About Our Hospital</h1>
                    <p>For over three decades, we have specialised in specific areas of medicine - mental health, orthopaedics, neurology, surgery and general medicine. This approach has given us an in-depth understanding of specific disorders and their treatments, enabling us to focus on providing the best treatment options and care for our patients. Each year, our 10,500 employees treat and care for around 320,000 patients at currently 26 locations in Germany and the United Kingdom.</p>
                    <h5><i className="fas fa-caret-right text-primary"></i> Browse Our Website</h5>
                    <h5><i className="fas fa-caret-right text-primary"></i> Best Service</h5>
                    <h5><i className="fas fa-caret-right text-primary"></i> Specialist Doctors </h5>
                    <Link to="/services"><button className="btn btn-primary mt-3 fs-4">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;