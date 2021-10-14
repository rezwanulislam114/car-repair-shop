import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../../Services/Service/Service';

const ServicesHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 3)))
    }, []);
    const history = useHistory();

    return (
        <div>
            <Container>
                <h1 className="title-text mt-5">Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
                <Button onClick={() => history.push("/services")} className="d-block mx-auto w-25 my-4" variant="danger">See More</Button>
            </Container>
        </div>
    );
}

export default ServicesHome;
