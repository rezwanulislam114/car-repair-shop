import React from 'react';
import { useParams } from 'react-router';

const ServiceInfo = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>this is service info section. and the service id is {id}</h1>
        </div>
    );
};

export default ServiceInfo;