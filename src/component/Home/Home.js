import React from 'react';
import "./Home.css"
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
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