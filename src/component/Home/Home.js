import React from 'react';
import { Navbar } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Header from "./Header/Header"
import "./Home.css"
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;