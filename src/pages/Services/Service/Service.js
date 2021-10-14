import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, time, description, id } = service;
    const history = useHistory();
    return (
        <div className="service">
            <img className="service-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <p>$ <span className="text-danger fs-3">{price}</span></p>
                <p>Time: {time}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <Button onClick={() => { history.push("/booking") }} variant="danger" className="">Book Now</Button>
                <Button onClick={() => { history.push(`/services/${id}`) }} variant="warning" className="">Details</Button>
            </div>
        </div>
    );
};

export default Service;