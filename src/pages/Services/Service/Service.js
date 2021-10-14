import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, time, description } = service;
    return (
        <div className="service">
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p>$ <span className="text-danger fs-3">{price}</span></p>
                <p>Time: {time}</p>
            </div>
            <Button variant="danger" className="me-auto d-block">Book Now</Button>
        </div>
    );
};

export default Service;