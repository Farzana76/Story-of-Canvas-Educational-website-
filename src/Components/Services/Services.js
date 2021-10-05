import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="event mt-4">All of our services</h1>
                <Row xs={1} md={2} lg={4} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        services.map(service => <Service 
                            key = {service.title}
                            service={service}
                            ></Service>)
                    }
                </Row> 
            <Footer></Footer>
        </div>
    );
};

export default Services;