import React from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Header from "./Header/Header"
import "./Home.css"
import Services from './Services/Services';
import Specialist from './Specialist/Specialist';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Specialist></Specialist>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;