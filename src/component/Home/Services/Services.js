import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("/servicesdata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-info">Our Services</h1>
            <hr className="mx-auto w-25 border border-1 border-info" />
            <div className="services-cart">
                <div className="row">
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;