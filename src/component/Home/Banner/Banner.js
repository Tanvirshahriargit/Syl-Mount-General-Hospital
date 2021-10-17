import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from "../../../Banner/banner1.png"
import Banner2 from "../../../Banner/banner2.png"
import Banner3 from "../../../Banner/banner3.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;