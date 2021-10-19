import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const {id, name, des, img } = service;
    return (
            <div  className="col-md-4 col-12 text-center mb-3 ">
                <div className="cart-container p-4 m-2  border h-100 ">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                <p className="text-strat" >{des}</p>
                <Link to={`/moreinformation/${id}`}><button className="btn btn-primary mx-auto">More Information  <i className="fa fa-plus-circle" aria-hidden="true"></i></button></Link>
                </div>
            </div>
    );
};

export default Service;