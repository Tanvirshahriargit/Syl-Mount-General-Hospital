import React from 'react';
import { Navbar } from 'react-bootstrap';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;